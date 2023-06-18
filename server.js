/* eslint-disable import/no-extraneous-dependencies */

const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require('cors');
const dbConnection = require("./Config/connection");
const userRouter = require("./Routes/user");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Database connection
dbConnection();

// Routes
app.use("/", userRouter);

// Start server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
