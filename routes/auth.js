// THIS IS FOR LOGIN (authenticate whether the credentials inputted match a registered user in the database)

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route       GET api/auth
// @desc        Get logged in user
// @access      Private (so we need verification middleware)
router.get('/', auth, async (req, res) => {
    // bring in auth (middleware) to fire off on this route (protected)
    try {
        // (req.user.id) is available to us because of the middleware (req.user = decoded.user)
        const user = await User.findById(req.user.id).select('-password'); // find the user but NOT the password
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route       POST api/auth
// @desc        Authenticate user & get token (when a registered user tries to log in)
// @access      Public
router.post(
    '/',
    [
        check('email', 'Please include a valid email').isEmail(), // check if inputted email IS an email
        check('password', 'Password is required').exists() // check if there is a password inputted
    ],
    async (req, res) => {
        const errors = validationResult(req); // errors for if any of the above fields did not match their validations
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() }); // if there are errors, send them and a 400 code
        }
        const { email, password } = req.body; // destructure res.body

        try {
            let user = await User.findOne({ email }); // find the user that has the email inputted

            if (!user) {
                // if there is NOT a user (email in database) respond with msg, otherwise move on...
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password); // checking if the password they inputted matches the one in database

            if (!isMatch) {
                // if it DOES NOT match, respond with msg
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

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
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
