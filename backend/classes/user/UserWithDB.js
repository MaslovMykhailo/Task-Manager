const User = require('./User');
const DB = require('../database/FakeDBInterface');

class UserWithDB extends User {
  constructor(id, name) {
    super(id, name);
    
    this.setCards = DB.getUserCards({ id: this.id, name: this.name });
  }
  
  saveCardsToDB() {
    DB.setUserCards(this.id, this.getCards);
  }
  
  getProjectFromDB(projectId) {
    return DB.getUserProjectById(this.id, projectId);
  }
  
  saveProjectToDB(projectId) {
    console.log(projectId);
    console.log(this.currentProjects);
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
