// User routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

// Create user
// api/users/create
router.post('/create', 
    //fields validation
    [
        check('firstName', 'El nombre es obligatorio').not().isEmpty(),
        check('lastName', 'El nombre es obligatorio').not().isEmpty(),
        check('username', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    userController.createUser
);

//User authentication
//api/users/Login
router.post('/Login', 
   userController.authUser
);

module.exports = router;