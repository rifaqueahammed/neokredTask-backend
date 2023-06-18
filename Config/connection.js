/* eslint-disable no-console */

const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const uri = "mongodb+srv://rifaquekh373406:TZvbRbsB3cjW71Zd@cluster0.1elnyh3.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
};

module.exports = connectToDatabase;

