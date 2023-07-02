// Importing necessary modules
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

// Enable CORS
app.use(cors());
// Enable JSON body parsing
app.use(bodyParser.json());

// Initialize tasks
let tasks = [];

// Route to get tasks
app.get('/tasks', (req, res) => {
  res.send(tasks);
});

// Route to create a task
app.post('/tasks', (req, res) => {
  tasks.push(req.body);
  res.send('Task created!');
});

// Route to update a task
app.put('/tasks/:id', (req, res) => {
  let id = req.params.id;
  let task = tasks.find(task => task.id == id);
  if (task) {
    task = { ...task, ...req.body };
    res.send('Task updated!');
  } else {
    res.status(404).send('Task not found!');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
