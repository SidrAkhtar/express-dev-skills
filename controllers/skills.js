// Should name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
   index,
   show
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