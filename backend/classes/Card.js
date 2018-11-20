class Card {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.color = data.color;
  }
  
  get getCardData() {
    const { id, name, description, color }  = this;
    return { id, name, description, color };
  }
}

module.exports = Card;