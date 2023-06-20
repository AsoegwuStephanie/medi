const Doctor = require('../models/doctor');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt"); //Importing bcrypt package

// const viewHome = (req, res) => {
//     res.send("welcome to castlevania");
//     console.log("success");
// };

// const viewlogin = (req, res) => {
//     res.render("login")
// };

// const viewRegister = (req, res) => {
//     res.render("register")
// };

const registerDoctor = (req, res) =>{
    const {name, age, gender, email, phonenumber, hname, dept, address, password, cpass} = req.body;
    if(!name || !age || !gender || !email || !phonenumber || !hname || !dept || !address || !password || !cpass){
        console.log('Please fill in empty fields');
    }
    if(password !== cpass){
        console.log('password must match');
    }
    else{
        const newDoctor = new Doctor({
            name,
            age,
            gender,
            email,
            phonenumber,
            hname,
            dept,
            address,
            password,
            cpass
        });
        bcrypt.genSalt(10, (err, salt) =>{
            bcrypt.hash(newDoctor.password, salt, (err, hash) =>{
                if(err) throw err;
                newDoctor.password = hash;
                newDoctor
                .save()
                .then(res.redirect('/register'))
                .catch((err) => console.log(err));
            })
        });
       
    }
}

module.exports = ({viewHome, viewlogin, viewRegister, registerDoctor})