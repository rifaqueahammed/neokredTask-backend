const express = require("express");

const router = express.Router();
const userSignup= require("../Controllers/Signup");
const userProfile = require("../Controllers/userProfile");
const userLogin = require("../Controllers/Login");
const verifyUser = require("../Middlewares/Authorization")

router.post("/signup",userSignup.userSignUp);
router.post("/login",userLogin.userLogin);
router.get("/profile",verifyUser.verifyToken,userProfile.getProfile);


module.exports = router;