const express = require('express');
const router = express.Router();

const request = require('superagent');
const async = require('async');

router.get('/', (req, res) => {
    console.log(res.body);
    res.status(200).json(res.body);
});

router.get('/detail', (req, res) => {
    res.status(200).json(res.body);
});

module.exports = router;