function Character (name, role, weapon) {
    this.name = name,
    this.role = role,
    this.weapon = weapon
}

const luke = new Character ("Luke Skywalker", "farmboy", "green lightsabre");
const obi = new Character ("Obi-wan Kenobi", "Jedi council member", "blue lightsabre");

export const jediKnights = [luke, obi];

export const sithLords = [
    new Character("Darth Vader", "absent father", "red lightsabre"),
    new Character("Palpatine", "Emperor", "lightning"),
    new Character("Darth Maul", "being in two places at once", "lightstaff")
]