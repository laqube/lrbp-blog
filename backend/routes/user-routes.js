const express = require('express');
const { registration } = require('../constrollers/user-controller');

const router = express.Router();

router.post("/registration", registration);
module.exports = router;