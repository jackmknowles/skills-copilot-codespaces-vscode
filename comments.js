// Create web server

// Load the express module
const express = require('express');

// Create an express application
const app = express();

// Load the body-parser module
const bodyParser = require('body-parser');

// Load the comments module
const comments = require('./comments');

// Use the body-parser middleware
app.use(bodyParser.json());

// Create a route for getting all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Create a route for adding a comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;

  if (username && comment) {
    comments.addComment(username, comment);
    res.status(201).send('Comment added');
  } else {
    res.status(400).send('Invalid request');
  }
});

// Create a route for getting a comment by ID
app.get('/comments/:id', (req, res) => {
  const comment = comments.getComment(req.params.id);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Create a route for updating a comment
app.put('/comments/:id', (req, res) => {
  const { username, comment } = req.body;

  if (username && comment) {
    const updated = comments.updateComment(req.params.id, username, comment);

    if (updated) {
      res.status(200).send('Comment updated');
    } else {
      res.status(404).send('Comment not found');
    }
  } else {
    res.status(400).send('Invalid request');
  }
});

// Create a route for deleting a comment
app.delete('/comments/:id', (req, res) => {
  const deleted = comments.deleteComment(req.params.id);

  if (deleted) {
    res.status(200).send('Comment deleted');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});