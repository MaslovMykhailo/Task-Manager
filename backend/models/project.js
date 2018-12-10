const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id: String,
  columns: [Object]
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;