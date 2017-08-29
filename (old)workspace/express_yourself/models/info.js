
class Skill {
	constructor(name){
		this.name = name
	}
}

const skills = [
	new Skill("HTML"),
	new Skill("CSS"),
	new Skill("JQuery"),
	new Skill("Javascript"),
	new Skill("Node.js"),
	new Skill("Express"),
	new Skill("Bootstrap"),
	new Skill("SQL"),
	new Skill("Python"),
	new Skill("Ruby"),
	new Skill("Rails")
];

module.exports = {
	Skill,
	skills
}



