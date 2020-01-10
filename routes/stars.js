// CRUD for each specific users contacts

const express = require('express');
const router = express.Router();

// @route       GET api/contacts
// @desc        Get all users contacts (NOT ALL CONTACTS ON THE DATABASE)
// @access      Private
router.get('/', (req, res) => {
  res.send('Get all users stars');
});

// @route       POST api/contacts
// @desc        Add new contacts
// @access      Private
router.post('/', (req, res) => {
  res.send('Add star');
});

// @route       GET api/contacts/:id
// @desc        Get all users contacts
// @access      Private
router.put('/:id', (req, res) => {
  res.send('Update stars');
});

// @route       DELETE api/contacts
// @desc        Delete contact
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete stars');
});

module.exports = router;
