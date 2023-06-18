/* eslint-disable import/no-extraneous-dependencies */

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../Model/User');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body.formValues;
    const user = await User.findOne({ email });

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        const payload = {
          // eslint-disable-next-line no-underscore-dangle
          id: user._id,
          email: user.email,
          fullName: user.fullName
        };

        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign(payload, jwtSecretKey, { expiresIn: 300 });

        res.json({ auth: true, payload, token: `Bearer ${token}` });
      } else {
        res.json({ error: "Wrong password" });
      }
    } else {
      res.json({ error: "Invalid email" });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error during user login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  userLogin
};
