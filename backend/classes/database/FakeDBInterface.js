const Logable = require('../../logable/Logable');

const exampleProject = {
  columns: [
    {
      name: 'Need to do',
      tasks: [],
      color: 'red'
    },
    {
      name: 'In process',
      tasks: [],
      color: 'yellow'
    },
    {
      name: 'Completed',
      tasks: [],
      color: 'green'
    }
  ]
};

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
  
  addUserProject(userId, project) {
    const user = this.users.find(user => userId === user.id);
    user.projects.push(project);
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
      const newProject = Object.assign({ id: projectId }, exampleProject);
      this.addUserProject(userId, newProject);
      return newProject;
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
  
  setUserProjectsListById(userId, projectDataList) {
    const userIndex = this.users.findIndex(user => userId = user.id);
    projectDataList.forEach(project => {
      const projectIndex = this.users[userIndex].projects.findIndex(p => project.id === p.id);
      this.users[userIndex].projects[projectIndex] = project;
    });
  }
}

const LogableDB = Logable(FakeDBInterface);

module.exports = new LogableDB();