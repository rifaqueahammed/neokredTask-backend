/* eslint-disable import/no-extraneous-dependencies */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  phoneNumber: {
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
  securityQuestion: {
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
  zipCode: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("User", userSchema);

