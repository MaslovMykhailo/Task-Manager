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
}

module.exports = UserWithDB;
