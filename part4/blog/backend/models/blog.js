const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  
  const Blog = mongoose.model('Blog', blogSchema)
  
  const mongoUrl = 'mongodb+srv://fullstack:Full69Stack@cluster0.ogn1kst.mongodb.net/blogApp?retryWrites=true&w=majority'
  mongoose.connect(mongoUrl)

  module.exports = mongoose.model('Blog', blogSchema)