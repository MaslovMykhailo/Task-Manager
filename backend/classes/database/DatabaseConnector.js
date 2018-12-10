const Logable = require('../logable/Logable');
const exampleProject = require('../../constants/EmptyProjectBody');
const UserModel = require('../../models/user');


class DatabaseConnector {
  constructor() {
    this.getUserCards = this.getUserCards.bind(this);
    this.getUserProjectById = this.getUserProjectById.bind(this);
  }

  setUser(userData) {
    const user = new UserModel({
      id: userData.id,
      name: userData.name,
      cards: [],
      projects: []
    });

    return user.save();
  }

  setUserProject(userId, project) {
    UserModel.findOneAndUpdate(
      { id: userId },
      { $push: { projects: project } },
      (error) => {
        if (error) console.log(error)
      });
  }

  getUserCards(userData) {
    return new Promise(resolve => {
      UserModel.findOne({id: userData.id}, (err, user) => {
        if (err) console.log(err);
        if (user) {
          resolve(user.cards);
        } else {
          this.setUser(userData);
          resolve([]);
        }
      });
    });
  }

  getUserProjectById(userId, projectId) {
    return new Promise(resolve => {
      UserModel.findOne({ id: userId }, (err, user) => {
        if (err) console.log(err);

        const project = user.projects.find(p => p.id === projectId);
        if (project) {
          resolve(project);
        } else {
          const newProject = Object.assign({ id: projectId }, exampleProject);
          this.setUserProject(userId, newProject);
          resolve(newProject);
        }
      })
    });
  }

  setUserCards(userId, cards) {
    UserModel.findOneAndUpdate(
      { id: userId },
      { $set: { cards: cards } },
      (error) => {
        if (error) console.log(error);
      });
  }

  setUserProjectById(userId, projectData) {
    UserModel.findOne({ id: userId }, (err, user) => {
      if (err) console.log(err);

      const projectIndex = user.projects.findIndex(p => p.id === projectData.id);
      const projects = user.projects.slice();
      projects[projectIndex] = projectData;

      user.update({ projects: projects }, err => {
        if (err) console.log(err);
      })
    });
  }

  setUserProjectsListById(userId, projectDataList) {
    UserModel.findOneAndUpdate(
      { id: userId },
      { $set: { projects: projectDataList } },
      (error) => {
        if (error) console.log(error);
      });
  }
}

const LogableDB = Logable(DatabaseConnector);
module.exports = new LogableDB();