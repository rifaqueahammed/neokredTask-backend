/* eslint-disable no-console */
// /* eslint-disable import/no-extraneous-dependencies */
// const mongoose = require("mongoose");

// module.exports = () => {
//   const uri = "mongodb+srv://rifaquekh373406:TZvbRbsB3cjW71Zd@cluster0.1elnyh3.mongodb.net/?retryWrites=true&w=majority";
//   mongoose
//     .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       // eslint-disable-next-line no-console
//       console.log("Connected to MongoDB Atlas");
//     })
//     .catch((error) => {
//       // eslint-disable-next-line no-console
//       console.error("Error connecting to MongoDB Atlas:", error);
//     });
// };

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

