const db = require('../models')
const Post = db.posts

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({message: "Content can not be empty"})
        return
    }

    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        published: false,
        comments: []
    })

    post.save(post)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })


}

exports.findAll = (req, res) => {
    Post.find({})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Post.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: 'Not Found'})
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({message: 'Data to update cannot be empty'})
    }

    const id = req.params.id
    Post.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'Not Found'
                })
            } else {
                Post.findById(id)
                    .then(data => {
                        res.send(data)
                    })
                    .catch(err => {
                        res.status(500).send({message: err.message})
                    })
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })

}

exports.updatePublished = (req, res) => {
    if (req.body.published === undefined) {
        return res.status(400).send({message: 'Data to published cannot be empty'})
    }
    const id = req.params.id
    Post.findByIdAndUpdate(id, {published: req.body.published}, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'Not Found'
                })
            } else {
                Post.findById(id)
                    .then(data => {
                        res.send(data)
                    })
                    .catch(err => {
                        res.status(500).send({message: err.message})
                    })
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findAllPublished = (req, res) => {
    Post.find({published: true})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}