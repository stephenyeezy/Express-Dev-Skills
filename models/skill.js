const skills = [
  {id: 125223, skill: 'JavaScript'},
  {id: 127904, skill: 'HTML'},
  {id: 139608, skill: 'CSS'}
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
  Object.assign(skill, updatedSkill);
}

function deleteOne(skillId) {
  const idx = skills.findIndex(skill => skill.id === parseInt(skillId));
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 10000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}