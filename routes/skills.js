var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
const { route } = require('.');

// GET /todos
router.get('/', skillsCtrl.index);
// GET /todos/new
router.get('/new', skillsCtrl.new);
// GET /todos/<some id>
router.get('/:id', skillsCtrl.show);
// POST /todos
router.post('/', skillsCtrl.create);
// DELETE /todos/:id
router.delete('/:id', skillsCtrl.delete);
// GET /todos/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// PUT /todos/:id
router.put('/:id', skillsCtrl.update);


module.exports = router;
