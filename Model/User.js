/* eslint-disable import/no-extraneous-dependencies */
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   full_name: {
//     type: String,
//     required: true,
//   },
//  dob: {
//     type: Date,
//     required: true,
//   },
//   phone_number: {
//     type: Number,
//     required: true,
//     unique: true,
//     min: 10,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   security_question:{
//     type: String,
//     required: true,
//   },
// address:{
//   type: String,
//     required: true,
// },
// city:{
//   type: String,
//     required: true,
// },
// state:{
//   type: String,
//     required: true,
// },
// zip_code:{
//   type: Number,
//   required: true,
// },
// country:{
//   type: String,
//   required: true,
// }
// });

// module.exports = mongoose.model("user", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true,
    min: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  security_question: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip_code: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", userSchema);

