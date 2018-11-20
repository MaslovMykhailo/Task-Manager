class FakeDBInterface {
  constructor() {
    this.users = [];
  }
  
  addUser(userData) {
    this.users.push({
      id: userData.id,
      name: userData.name,
      cards: [],
      projects: []
    })
  }
  
  addUserProject(userId) {
    const user = this.users.find(user => userId === user.id);
    // push empty project
    user.projects.push({});
  }
  
  getUserCards(userData) {
    const user = this.users.find(user => userData.id === user.id);
    if (user) {
      return user.cards;
    } else {
      this.addUser(userData);
      return [];
    }
  }
  
  getUserProjectById(userId, projectId) {
    const user = this.users.find(user => userId = user.id);
    const project = user.projects.find(p => projectId === p.id);
    if (project) {
      return project;
    } else {
      this.addUserProject(userId);
      // return empty project
      return {};
    }
  }
  
  setUserCards(userId, cards) {
    const userIndex = this.users.findIndex(user => userId = user.id);
    this.users[userIndex].cards = cards;
  }
  
  setUserProjectById(userId, projectData) {
    const userIndex = this.users.findIndex(user => userId = user.id);
    const projectIndex = this.users[userIndex].projects.findIndex(p => projectData.id === p.id);
    this.users[userIndex].projects[projectIndex] = projectData;
  }
}

module.exports = new FakeDBInterface();