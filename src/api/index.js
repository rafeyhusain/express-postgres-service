const express = require('express');

const {Router} = express;
const router = new Router();

const product = require('./product');

router.use('/api/product', product);

module.exports = router;
