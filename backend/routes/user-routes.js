const express = require('express');
const { registration, login, verifyToken, getUser } = require('../constrollers/user-controller');

const router = express.Router();

router.post("/registration", registration);
router.post("/login", login );
router.get("/user", verifyToken, getUser);
module.exports = router;