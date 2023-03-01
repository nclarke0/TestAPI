const controller = require('../controllers/rooms');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

module.exports = router;