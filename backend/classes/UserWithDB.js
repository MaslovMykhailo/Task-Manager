const User = require('./User');
const DB = require('./FakeDBInterface');

class UserWithDB extends User {
  constructor(id, name) {
    super(id, name);
    
    this.DB = DB;
    this.cards = this.DB.getUserCards({ id: this.id, name: this.name });
  }
  
  saveCardsToDB() {
    this.DB.setUserCards(this.id, this.cards);
  }
}

module.exports = UserWithDB;
