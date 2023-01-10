const User = require('../model/User');

const registration = async(req, res, next) =>{
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password
    });

    try{
        await user.save();
    }catch(err){
        console.log(err);
    }
    return res.status(201).json({message:user})
}

exports.registration = registration;