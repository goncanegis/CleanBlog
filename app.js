const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');

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
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// Routes
app.get('/', postController.getAllPosts);
app.get('/post/:id', postController.getPost);
app.get('/about', pageController.getAboutPage);
app.get('/add-post', pageController.getAddPage);
app.post('/post', postController.createPost);
app.get('/post/edit/:id', pageController.getEditPage);
app.put('/post/:id', postController.updatePost);
app.delete('/post/:id', postController.deletePost);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
