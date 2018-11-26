
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
  //
  // addCurrentProject(project) {
  //   this.currentProjects.push(project);
  // }
  //
  // getCurrentProjectById(id) {
  //   return this.currentProjects.find(project => project.id === id);
  // }
}

module.exports = User;