const lodash = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = blogs => {
    const reducer = (sum, blog) => sum + blog.likes

    return blogs.length === 0
      ? 0
      : blogs.reduce(reducer, 0)
}

const mostLiked = blogs => {
    const reducer = (max, blog) => max.likes > blog.likes ? max : blog
    return blogs.reduce(reducer)
}

const mostBlogs = blogs => {

    return 0
}

module.exports = {
    dummy,
    totalLikes,
    mostLiked
}