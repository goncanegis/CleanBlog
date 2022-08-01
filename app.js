const express = require('express');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

const app = express();
const PORT = 3001;

// connect to mongodb
mongoose.connect('mongodb://localhost/blog_posts');

// Template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
  const posts = await BlogPost.find({});
  res.render('index', { posts });
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add-post', (req, res) => {
  res.render('add_post');
});
app.post('/post', async (req, res) => {
  await BlogPost.create(req.body);
  res.redirect('/');
});
app.get('/post/:id', async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  res.render('post', { post });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
