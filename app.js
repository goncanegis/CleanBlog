const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const PORT = 3001;

// Template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add-post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
