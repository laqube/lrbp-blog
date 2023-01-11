const User = require('../model/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWT_SK = 'Secret!';


//REGISTRATION
const registration = async(req, res, next) =>{
    const{username, email, role, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email: email}); //email uniqueness validation
    }catch(err){
        console.log(err);    
    }
    if(existingUser){               
        return res
        .status(400)
        .json({message: "Email is already used >:( Try another or log in"})
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        username,
        email,
        role,
        password: hashedPassword //now passwords are secure!
    });

    try{
        await user.save();
    }catch(err){
        console.log(err);
    }
    return res.status(201).json({message:user})
}

//INITIAL LOGIN
const login = async (req, res, next) =>{
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email: email});      //email validation
    }catch(err){
        return new Error(err);
    }if(!existingUser){
        return res.status(400).json({message: "Email is not correct >:("});

    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){                                     //password validation
        return res.status(400).json({message: "Password is wrong! >:("});
    }
    const token = jwt.sign({id: existingUser._id}, JWT_SK, {expiresIn: "2hr"}); //initial token
    res.cookie(String(existingUser._id), token, {                               //saving token inside of a cookie
        path: '/',
        expires: new Date(Date.now()+ 1000 * 720),
        httpOnly: true,
        sameSite: 'lax',
    })
    return res
    .status(200)
    .json({message: "Molodec, kirdik", user: existingUser, token }); //feedback on successfull entry

}

//REPETITIVE ENTRY WITHIN 2HR SESSION <-> JWT VALIDITY CHECK    
const verifyToken = (req, res, next) => {
    // const cookies = req.headers.cookie;
    // const token = cookies.split("=")[1];                //get the jwtoken using cookies
    // console.log(token)
    const headers = req.headers['authorization']; //old code for getting the token
    const token = headers.split(" ")[1];
    if(!token)  {                                       //check if token exists
        res.status(404).json({message:"Tabylmady"});
    }
    jwt.verify(String(token), JWT_SK, (err, user) =>{   //verify the token
        if(err){
            return res.status(400).json({message:"Token qurtylgan"});
        }
        console.log(user.id); 
        req.id = user.id; 
    })
    next();
};

// FETCH USER INFROMATION USING JWT
const getUser = async (req, res, next) => {
    const userId = req.id;
    let user;
    try{
        user = await User.findById(userId, "-password");    //giveaway all the info except the password
    }catch(err){
        return new Error(err);
    }
    if(!user){
        return res.status(404).json({message: "User tabylmady"}); //token is leading to deleted user
    }
    return res.status(200).json({user});
}

exports.registration = registration;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;