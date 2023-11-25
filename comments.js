// Create web server with express
// File: server.js
const express = require('express');
const app = express();
const port = 3000;

// Use express to parse JSON data
app.use(express.json());

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  // Find comment by id
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  // If not found, return 404
  if (!comment) return res.status(404).send('The comment with the given ID was not found.');
  // Return the object
  res.json(comment);
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  // Create a new comment object
  const comment = {
    id: comments.length + 1,
    name: req.body.name,
    comment: req.body.comment
  };
  // Add the comment object to array
  comments.push(comment);
  // Return the new comment object
  res.json(comment);
});

// Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  // Find comment by id
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  // If not found, return 404
  if (!comment) return res.status(404).send('The comment with the given ID was not found.');
  // Update comment
  comment.name = req.body.name;
  comment.comment = req.body.comment;
  // Return the updated comment object
  res.json(comment);
});

// Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    // Find comment by id
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    // If not found, return 404
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');
    // Delete comment
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    // Return the same comment object
    res.json(comment);
});

// Listen on port 3000
app.listen(port, () => {
    console.log('Server listening on port 3000');
});
