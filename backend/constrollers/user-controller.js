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
    const token = jwt.sign({id: existingUser._id}, JWT_SK, {expiresIn: "1hr"}); //initial token
    return res.status(200).json({message: "Molodec, kirdik", user: existingUser, token }); //feedback on successfull entry

}

exports.registration = registration;
exports.login = login;