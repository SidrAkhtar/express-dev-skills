const skills = [
   {id:24580, skill: 'HTML', expert: true},
   {id:24586, skill: 'CSS', expert: false},
   {id:24587, skill: 'JavaScript', expert: false},
];

module.exports = {
   getAll,
   getOne
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