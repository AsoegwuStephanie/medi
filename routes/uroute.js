const express = require('express');
const router = express.Router();
const {viewHome, viewlogin, viewRegister, registerDoctor} = ('../controller/dController.js');

// router.get('/', viewHome);
// router.get('/login', viewlogin);
// router.get('/register', viewRegister);
router.post('/register', registerDoctor);

module.exports = router;