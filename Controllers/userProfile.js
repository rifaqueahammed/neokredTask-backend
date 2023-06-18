/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */

const moment = require('moment');
const User = require('../Model/User');

const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.id });
    if (user) {
      const formattedDOB = moment(user.dob).format('MMMM Do, YYYY');
      const data = {
        _id: user._id,
        full_name: user.full_name,
        dob: formattedDOB,
        phone_number: user.phone_number,
        email: user.email,
        security_question: user.security_question,
        address: user.address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
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





