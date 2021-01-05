const express = require('express');

const { getStocks } = require('../controllers/stocks');
const router = express.Router();

router
    .route('/')
    .get(getStocks)

module.exports = router;