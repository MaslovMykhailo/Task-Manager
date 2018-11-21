const Card = require('../data/Card');

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.cards = [];
    this.currentProject = null;
  }
  
  set setCards(cards) {
    this.cards = cards.map(data => new Card(data));
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