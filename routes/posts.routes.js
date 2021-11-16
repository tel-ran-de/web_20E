module.exports = app => {
    const posts = require('../controllers/posts.controller')
    const router = require('express').Router()

    router.post('/', posts.create)
    router.get('/', posts.findAll)
    router.get('/published', posts.findAllPublished)
    router.get('/:id', posts.findOne)
    router.put('/:id', posts.update)
    router.put('/published/:id', posts.updatePublished)


    app.use('/api/posts', router)
}