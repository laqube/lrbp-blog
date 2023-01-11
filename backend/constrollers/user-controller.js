const User = require('../model/User');
const bcrypt = require("bcryptjs");


const registration = async(req, res, next) =>{
    const{username, email, role, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email: email});
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

const login = async (req, res, next) =>{
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email: email});
    }catch(err){
        return new Error(err);
    }if(!existingUser){
        return res.status(400).json({message: "Email is not correct >:("})

    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Password is wrong! >:("})
    }
    return res.status(200).json({message: "Molodec, kirdik"})
}

exports.registration = registration;
exports.login = login;