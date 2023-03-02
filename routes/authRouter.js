const express = require("express");
const router = express.Router();
const {
  signup,
  validateSignup,
  signin,
  signout,
} = require("../controllers/authController");

router.post("/signup", [validateSignup, signup]);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
