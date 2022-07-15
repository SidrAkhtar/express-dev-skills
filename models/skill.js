const skills = [
   {id:24580, skill: 'HTML', expert: true},
   {id:24586, skill: 'CSS', expert: false},
   {id:24587, skill: 'JavaScript', expert: false},
];

module.exports = {
   getAll,
   getOne,
   create,
   deleteOne,
   update
};


function getAll() {
   return skills;
}

function getOne(id) {
   // URL params are strings - convert to a number
   id = parseInt(id);
   // The Array.prototype.find iterator method is
   // idea for finding objects within an array
   return skills.find((skill) => skill.id === id);
   }

function create(skill) {
   // Add the id
  skill.id = Date.now() % 1000000;
  // New skills wouldn't be done :)
  skill.expert = false;
  skills.push(skill);
}

function deleteOne(id) {
   // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the skill object
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, updatedSkill) {
   id = parseInt(id);
  const skill = skills.find((skill) => skill.id === id);
  // Merge the updatedSkill's properties into the 
  // existing skill object's properties
  Object.assign(skill, updatedSkill);
}