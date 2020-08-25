var Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  // Inputs of type="checkbox" are not included in the body if they
  // are not checked. If they are checked, the body property (done)
  // will have a value of "on".
  req.body.done = !!req.body.done;
  // Use the Todo model to update the todo
  Skill.update(req.params.id, req.body);
  // Redirect because data has been updated
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
  // Use the model to delete the to-do
  Skill.deleteOne(req.params.id);
  // Redirect because we changed data
  res.redirect('/skills');
}

function create(req, res) {
  console.log("req.body", req.body);
  // The model is responsible for CRUD'ing data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

// New action:  The user wants to see a form for entering the data for a new data resource
function newSkill(req, res) {
  res.render('skills/new');
}

// The user wants to see all of a data resource (Read all)
function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time
  });
}

// The user wants to see one of a data resource object (Read one)
function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
  });
}
