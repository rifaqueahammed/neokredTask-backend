/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */

const bcrypt = require("bcrypt");
const User = require('../Model/User');

const userSignUp = async (req, res) => {
  try {
    const { email, phone_number, full_name, DOB, password, security_question, address, city, state, zip_code, country } = req.body.formValues;

    const existingUser = await User.findOne({
      $or: [
        { email },
        { phone: phone_number },
      ],
    });

    if (existingUser) {
      res.json({ error: "User Already Exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        full_name,
        dob: DOB,
        phone_number,
        email,
        password: hashedPassword,
        security_question,
        address,
        city,
        state,
        zip_code,
        country,
      });

      await newUser.save();
      res.json({ success: true });
    }
  } catch (error) {
    console.error("Error during user sign up:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  userSignUp
};
