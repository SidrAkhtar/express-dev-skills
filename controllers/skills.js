// Should name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
   index,
   show,
   new: newSkill,
   create,
   delete: deleteSkill,
   edit,
   update
};

function index(req, res) {
   // obtain the array  of todos from the Todo model
   const skills = Skill.getAll();
   res.render('skills/index', { skills });
};


function show(req, res) {
   // Get the todo for the id that is passed as a route param
   // All route params are accessed via req.params object
   const skill = Skill.getOne(req.params.id);
   res.render('./skills/show', { skill });
}

function newSkill(req, res) {
   res.render('skills/new');
}

function create(req, res) {
   // console.log(req.body);
   // The model is responsible for creating data
   Skill.create(req.body);
   // Do a redirect anytime data is changed
   res.redirect('/skills');
}

function deleteSkill(req, res) {
   Skill.deleteOne(req.params.id);
   res.redirect('/skills');
}

function edit(req, res) {
   const skill = Skill.getOne(req.params.id);
   res.render('skills/edit', { skill });
}

function update(req, res) {
   req.body.expert = !!req.body.expert;
   Skill.update(req.params.id, req.body);
   res.redirect(`/skills/${req.params.id}`);
}