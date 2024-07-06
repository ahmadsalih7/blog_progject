//imports
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('config');
const {dblogger} = require('../config/logger');
const { User, validate } = require('../models/user');


router = express.Router();
router.use(express.json())

// Register a new user using POST 
router.post('/', async (req, res) => {
    //validate the JSON input is a valid user object
    const { error } = validate(req.body);
    // If it's  not valid send the error and return
    if (error) return res.status(400).send(error.details[0].message);

    // else create a a new User model instance
    // During registration, hash the password before saving the user
    const saltRounds = config.get('SALT_WORK_FACTOR');
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    // Create a new user with the hashed password
    const newUser = new User({
        username: req.body.username,
        password: hashedPassword
    });
    try {
        res.send(await newUser.save());
        dblogger.info('A new user was registered')
    }
    catch(err){
        res.status(409).send("User is already exists");
        dblogger.error(err.message);
    }

});

//export the Router obejct
module.exports = router;