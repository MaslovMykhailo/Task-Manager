
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.cards = [];
    this.currentProject = null;
  }
  
  set setCards(cards) {
    this.cards = cards;
  }
  
  get getCards() {
    return this.cards;
  }
  
  set setCurrentProject(project) {
    this.currentProject = project;
  }
  
  get getCurrentProject() {
    return this.currentProject;
  }
}

module.exports = User;