const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithMultipleBlogs = [
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Doping on Lahe',
      author: 'Andrus Veerpalu',
      url: 'www.postimees.ee',
      likes: 12,
      __v: 0
    },
    {
      _id: '5a433aa71b54a676234d17f9',
      title: 'Doping',
      author: 'Andrus',
      url: 'delfi.ee',
      likes: 112,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f1',
      title: 'Peaminister',
      author: 'Madis Milling',
      url: '',
      likes: 0,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f0',
      title: 'RAHALAEN',
      author: 'Kree Tiit',
      url: 'www.github.com',
      likes: 1,
      __v: 0
    }
  ]

  test('of empty lis is zero', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(listWithMultipleBlogs)
    expect(result).toBe(125)
  })
})

describe('favourite blog', () => {
  const listWithMultipleBlogs = [
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Doping on Lahe',
      author: 'Andrus Veerpalu',
      url: 'www.postimees.ee',
      likes: 12,
      __v: 0
    },
    {
      _id: '5a433aa71b54a676234d17f9',
      title: 'Doping',
      author: 'Andrus',
      url: 'delfi.ee',
      likes: 112,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f1',
      title: 'Peaminister',
      author: 'Madis Milling',
      url: '',
      likes: 0,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f0',
      title: 'RAHALAEN',
      author: 'Kree Tiit',
      url: 'www.github.com',
      likes: 1,
      __v: 0
    }
  ]
  const result = listHelper.mostLiked(listWithMultipleBlogs)
  expect(result).toEqual(listWithMultipleBlogs[1])
})