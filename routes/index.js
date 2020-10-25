const express = require('express');

const router = express.Router();
const controller = require('../controllers/controller');

console.log('Router loaded.');

router.get('/', controller.home);

router.post('/add', controller.addTask);

module.exports = router;