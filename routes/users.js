// THIS IS FOR SIGNUP (register a user to database)

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route       POST api/users      (the '/' is actually api/users because in server.js it is being used at that)
// @desc        Register a user
// @access      Public
router.post(
    '/',
    [
        check('name', 'Please add name') // validations for name
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(), // validations for email
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }) // validations for password
    ],
    async (req, res) => {
        const errors = validationResult(req); // errors for if any of the above fields did not match their validations
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() }); // if there are errors, send them and a 400 code
        }

        const { name, email, password } = req.body; // destructuring

        try {
            let user = await User.findOne({ email }); // find the user with the email that was just registered (usually in format ({ email: email }))

            if (user) {
                return res.status(400).json({ msg: 'User already exists' }); // if that email (user) exists, send text and 400 code
            }

            user = new User({
                // else create the user with the destructured req.body
                name,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10); // 10 is how secure the salt is

            user.password = await bcrypt.hash(password, salt); // set user password to the hash rather than the original password they inputted

            await user.save();

            // payload is the object to send to user when logged in
            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                    expiresIn: 360000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
