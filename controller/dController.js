const doctorModel = require('../models/doctor');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt"); //Importing bcrypt package
const bodyParser = require('body-parser');
const passport = require('passport');





// function loginCheck(passport){
    // Function to authenticate doctors
//  passport.use(new localStrategy({usernameField: 'email', passwordField: 'password'}, (email, password, done) =>{
//     // check Doctor
//     Doctor.findOne({email: email})
//     .then((user) =>{
//         if(!user){
//             console.log("Wrong Email");
//             return done(null, false);
//         }
        // Compare Password
//         bcrypt.compare(password, user.password, (error, isMatch) =>{
//             if(error) throw error;
//             if(isMatch){
//                 return done(null, user);
//             }else{
//                 console.log("Wrong Password");
//                 return done(null, false);
//             }
//         })
//     })
//     .catch((error) => console.log(error))
//  }));
    


    // This is to serialize our user and store it inside the session
//     passport.serializeUser((user, done) => {
//         done(null, user.id)
//     });
//     passport.deserializeUser((id, done) => {
//         doctorModel.findById(id)
//         .then((user) => {
//             done(null, user)
//         })
//         .catch((error) =>{
//             console.log(error);
//         });
//     });
// };

const registerDoctor = async (req, res) =>{

    //console.log(req.body);
    const reqBody = JSON.parse(JSON.stringify(req.body));
    const {name , age, gender, email, phonenumber, hname, dept, address, password, cpass} = req.body;
    console.log(req.body.name);
    if(req.body.length < 10){
        console.log('Please fill in empty fields');
       if(password !== cpass){
        console.log('password must match');
    }
}
   else{
        
        try{
            const hashedPassword = await bcrypt.hash(req.body.passord, 10)
            const newDoctor = await doctorModel.create({
                id:Date.now().toString(),
                name:name,
                age:age,
                gender:gender,
                email:email,
                phonenumber:phonenumber,
                hname:hname,
                dept:dept,
                address:address,
                password: hashedPassword,
                cpass:cpass
            });
            res.redirect('/login')
            console.log(newDoctor)
        }
        catch(err){
            console.log(err.message);
            res.redirect("/register")
        }
       
    }
};

// const loginDoctor = (req, res) =>{
//     const {email, password} = req.body;
//     if(!email || !password){
//         console.log("Fill in empty fields");
//         res.redirect('/login');
//     }else{
//         passport.authenticate('local', {
//             successRedirect: '/dashboard',
//             failureRedirect: '/login',
//             failureMessage: true,
//         })(req, res);
//     }
// }
// viewHome, viewlogin, viewRegister,
module.exports = { registerDoctor}