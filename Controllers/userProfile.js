/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */

const moment = require('moment');
const User = require('../Model/User');

const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.id });
    if (user) {
      const formattedDOB = moment(user.DOB).format('MMMM Do, YYYY');
      const data = {
        _id: user._id,
        fullName: user.fullName,
        DOB: formattedDOB,
        phoneNumber: user.phoneNumber,
        email: user.email,
        securityQuestion: user.securityQuestion,
        address: user.address,
        city: user.city,
        state: user.state,
        zipCode: user.zipCode,
        country: user.country,
      };
      res.json(data);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error while retrieving user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getProfile
};





