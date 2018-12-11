const User = require('./User');
const DB = require('../database/DatabaseConnector');

class UserConnectedToDB extends User {
  constructor(id, name) {
    super(id, name);
  }

  getCardsFromDB() {
    return DB.getUserCards({ id: this.id, name: this.name });
  }

  saveCardsToDB() {
    return DB.setUserCards(this.id, this.getCards);
  }
  
  getProjectFromDB(projectId) {
    return DB.getUserProjectById(this.id, projectId);
  }
  
  saveProjectToDB(projectId) {
    DB.setUserProjectById(
      this.id,
      this.currentProjects.find(p => p.id === projectId)
    );
  }
  
  saveProjectsListToDB() {
     return DB.setUserProjectsListById(this.id, this.cards, this.currentProjects);
  }
}

module.exports = UserConnectedToDB;
