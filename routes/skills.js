var express = require('express');
var router = express.Router();

// Require the controller that exports skill CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

// GET /skills (index funtionality - list all)
router.get('/', skillsCtrl.index);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
