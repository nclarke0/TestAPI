const controller = require('../controllers/users');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get("/:id", controller.getById);

module.exports = router;