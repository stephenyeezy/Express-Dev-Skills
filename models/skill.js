// The ids can be generated using:
// Date.now() % 1000000
const skills = [
  {id: 125223, skill: 'Feed Dogs', done: true},
  {id: 127904, skill: 'Learn Express', done: false},
  {id: 139608, skill: 'Buy Milk', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  const skill = skills.find(t => t.id === parseInt(id));
  // Object.assign(targetObj, mergeObj1, mergeObj2, etc.)
  Object.assign(skill, updatedSkill);
}

function deleteOne(skillId) {
  // Find the index of the todo object
  // based upon its id
  const idx = skills.findIndex(skill => skill.id === parseInt(skillId));
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 10000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}