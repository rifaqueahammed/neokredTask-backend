/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
// const bcrypt = require("bcrypt");
// const User = require('../Model/User');

// module.exports = {
//     userSignUp: (req, res) => {
//         try {
//           User.findOne({
//             $or: [
//               { email: req.body.formValues.email },
//               { phone: req.body.formValues.phone_number },
//             ],
//           }).then(async (result) => {
//             if (result) {
//               res.json({ error: "User Already Exist" });
//             } else {
//               const salt = await bcrypt.genSalt(10);
//                     // now we set user password to hashed password
//               req.body.formValues.password = await bcrypt.hash(req.body.formValues.password, salt);
//               const newUser = new User({
//                 full_name: req.body.formValues.full_name,
//                 dob: req.body.formValues.DOB,
//                 phone_number: req.body.formValues.phone_number,
//                 email: req.body.formValues.email,
//                 password:req.body.formValues.password,
//                 security_question:req.body.formValues.security_question,
//                 address: req.body.formValues.address,
//                 city: req.body.formValues.city,
//                 state: req.body.formValues.state,
//                 zip_code: req.body.formValues.zip_code,
//                 country: req.body.formValues.country,
//               });
//               newUser.save().then(() => {
//                 res.json({ success: true });
//               });
//             }
//           });
//         } catch (error) {
//           // Handle any potential errors
//           res.json({ error: error.message });
//         }
//       }
      
// }
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
