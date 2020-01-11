const express = require('express');
const router = express.Router();
/* const bcrypt = require('bcryptjs'); */
/* const jwt = require('jsonwebtoken'); */
/* const config = require('config'); */
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route       PUT api/stars/:id
// @desc        Update contact
// @access      Private
router.put('/:id', auth, async (req, res) => {
  const { stars } = req.body;
  const loggedInUser = req.user.id;

  // build toUpdate object (these are the fields we would be editing)
  const toUpdate = {};
  console.log(stars);
  if (stars) toUpdate.stars = stars; // if stars exists in req.body, add it to toUpdate

  try {
    let user = await User.findById(req.params.id); // create contact based on the id in the endpoint

    if (!user) return res.status(404).json({ msg: 'User not found' }); // if their search doesn't exist

    // make sure the users stars being update is by the person logged in (so someone can't just change them with Postman etc.)
    // this is done by taking the user in the token and comparing it to the user whos stars is being updated
    if (req.params.id !== loggedInUser) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    user = await User.findByIdAndUpdate(
      req.params.id, // this is the id we find by (_id)
      { $set: toUpdate }, // setting the fields of the contact to the updated fields
      { returnOriginal: false }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
