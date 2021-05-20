const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');


// Create user
exports.createUser= async(req,res)=>{

    console.log(req.body);

      // Check errors
      const errores = validationResult(req);
      if( !errores.isEmpty() ) {
          return res.status(400).json({errores: errores.array() })
      }
    
    //extract email and password
    const {username,password}=req.body;

    try {
        // Check that the registered user is unique
        let user = await User.findOne({ username });

        if(user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // create new User instance
        user = new User(req.body);

        // Hashs the password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt );

        // save user
        await user.save();
        // return response success
        res.status(200).send('User Created successfully')

    } catch (error) {
        console.log(error);
        res.status(400).send('There was an error');
    }

}


//User authentication
exports.authUser = async (req, res) => {
    let token=""
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    // extract email and password
    const { username, password } = req.body;

    try {
        // Check that you are a registered user
        let user = await User.findOne({ username });
        if(!user) {
            return res.status(400).json({msg: 'User not exists'});
        }

        // Check the password
        const passCorrecto = await bcryptjs.compare(password, user.password);
        if(!passCorrecto) {
            return res.status(400).json({msg: 'Password Incorrect' })
        }


        try {
            //find user
             user = await User.findById(user.id).select('-password');
             //return user
             res.json(user);
        } catch (error) {
            console.log(error);
            res.status(400).json({msg: 'Hubo un error'});
        }
    } catch (error) {
        console.log(error);
    }
}
