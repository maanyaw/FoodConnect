const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// POST route to handle donation submissions
router.post('/donation', async (req, res) => {
  try {
    const {
      donationAmt,
      frequency,
      firstName,
      middleName,
      lastName,
      state,
      country,
      addressLines,
      city,
      postalCode,
      email,
      confirmEmail,
      phone,
      cardNumber,
      expirationDate,
      cvv
    } = req.body;

    // Validate email confirmation
    if (email !== confirmEmail) {
      return res.status(400).json({ success: false, message: 'Email addresses do not match.' });
    }

    const newDonation = new Donation({
      donationAmt,
      frequency,
      firstName,
      middleName,
      lastName,
      state,
      country,
      addressLines,
      city,
      postalCode,
      email,
      confirmEmail,
      phone,
      cardNumber,
      expirationDate,
      cvv
    });

    await newDonation.save();
    res.status(201).json({ success: true, message: 'Donation successfully recorded!' });
  } catch (error) {
    console.error('Error saving donation:', error);
    res.status(500).json({ success: false, message: 'An error occurred while processing your donation.' });
  }
});

module.exports = router;

