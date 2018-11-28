
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.cards = [];
    this.currentProjects = [];
  }
  
  set setCards(cards) {
    this.cards = cards;
  }
  
  get getCards() {
    return this.cards;
  }

  addCurrentProject(project) {
    this.currentProjects.push(project);
  }

  getCurrentProjectById(id) {
    return this.currentProjects.find(project => project.id === id);
  }
  
  changeCurrentProject(changedProject) {
    let projectIndex = this.currentProjects.findIndex(
      project => project.id === changedProject.id
    );
    this.currentProjects[projectIndex] = changedProject;
    return changedProject;
  }
}

module.exports = User;