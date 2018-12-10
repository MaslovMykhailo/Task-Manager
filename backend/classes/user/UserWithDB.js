const User = require('./User');
const DB = require('../database/DatabaseConnector');

class UserWithDB extends User {
  constructor(id, name) {
    super(id, name);
    
    // DB.getUserCards({ id: this.id, name: this.name }).then(cardsList => {
    //   this.setCards = cardsList;
    // });
  }

  getCardsFromDB() {
    return DB.getUserCards({ id: this.id, name: this.name });
  }

  saveCardsToDB() {
    DB.setUserCards(this.id, this.getCards);
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
     DB.setUserProjectsListById(this.id, this.currentProjects);
  }
}

module.exports = UserWithDB;
