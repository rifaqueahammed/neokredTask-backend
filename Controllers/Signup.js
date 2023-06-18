/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const bcrypt = require("bcrypt");
const User = require('../Model/User');

const userSignUp = async (req, res) => {
  try {
    const { email, phoneNumber, fullName, DOB, password, securityQuestion, address, city, state, zipCode, country } = req.body.formValues;

    const existingUser = await User.findOne({
      $or: [
        { email },
        { phoneNumber},
      ],
    });

    if (existingUser) {
      res.json({ error: "User Already Exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        fullName,
        DOB,
        phoneNumber,
        email,
        password: hashedPassword,
        securityQuestion,
        address,
        city,
        state,
        zipCode,
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
