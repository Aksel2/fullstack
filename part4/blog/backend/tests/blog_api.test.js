const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: "Test blog one",
        author: "Markus Aurelius",
        url: "www.postimees.ee",
        likes: 12
    },
    {
        title: "Second blog",
        author: "Kree Tiit",
        url: "www.rahapesu.com",
        likes: 155
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('There are two blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(initialBlogs.length)
})

test('blogs have id field', async () => {
    const response = await api.get('/api/blogs')
    response.body.forEach(blog => expect(blog.id).toBeDefined())
})

test('a valid blog can be added', async () => {
    const newBlog = {
        title: "Blog to be added",
        author: "Mike Scam",
        url: "www.ut.ee",
        likes: 4
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await api.get('/api/blogs')
    expect(blogsAtEnd.body).toHaveLength(initialBlogs.length + 1)

    const contents = blogsAtEnd.body.map(n => n.title)
    expect(contents).toContain('Blog to be added')
})

test('when missing likes propety then likes are set to 0', async () => {
    const newNoLikesBlog = {
        title: "Missing likes",
        author: "No Likey",
        url: "like.com",
    }

    await api
        .post('/api/blogs')
        .send(newNoLikesBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await api.get('/api/blogs')
    const blogAtEnd = blogsAtEnd.body[blogsAtEnd.body.length - 1]
    expect(blogAtEnd.likes).toBe(0)
})

/*test('title or url is missing', async () => {
    const newNoAuthorBlog = {
        author: "XD",
        url: "like.com",
        likes: 3
    }

    await api
        .post('/api/blogs')
        .send(newNoAuthorBlog)
        .expect(400)

    const blogsAtEnd = await api.get('/api/blogs')
    console.log(blogsAtEnd.body);

})*/

test('delete blog', async () => {
    const blogsAtStart = await api.get('/api/blogs')
    const blogToBeDeleted = blogsAtStart.body[0]

    await api
    .delete(`/api/blogs/${blogToBeDeleted.id}`)
    .expect(204)

    const blogsAtEnd = await api.get('/api/blogs')
    
    expect(blogsAtEnd.body).toHaveLength(initialBlogs.length - 1)

    const titles = blogsAtEnd.body.map(n => n.title)
    expect(titles).not.toContain(blogToBeDeleted.title)
})

test('updating blog information', async () => {
    const blogsAtStart = await api.get('/api/blogs')
    const blogToBeUpdated = blogsAtStart.body[0]
    blogToBeUpdated.title = "updated title"
    blogToBeUpdated.author = "updated author"
    blogToBeUpdated.url = "updated url"
    blogToBeUpdated.likes = 100

    await api
    .put(`/api/blogs/${blogToBeUpdated.id}`)
    .send(blogToBeUpdated)
    .expect(200)

    const blogsAtEnd = await api.get('/api/blogs')
    expect(blogsAtEnd.body[0].title).toBe("updated title")
    expect(blogsAtEnd.body[0].author).toBe("updated author")
    expect(blogsAtEnd.body[0].url).toBe("updated url")
    expect(blogsAtEnd.body[0].likes).toBe(100)
})

afterAll(async () => {
    await mongoose.connection.close()
})