const express = require('express');
const passport = require('passport')
const router = express.Router();
const {  registerDoctor} = require ('../controller/dController.js');

// router.get('/', viewHome);
// router.post('/login', loginDoctor);
// router.get('/register', viewRegister);
router.post('/register', registerDoctor);

module.exports = router;