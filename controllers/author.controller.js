/*
Create
Read
Update
Delete

create
findAll
findOne
update
 */

const db = require('../models');
const Author = db.authors;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({message: "Name field can not be empty"});
        return;
    }

    const author = {
        name: req.body.name
    };

    Author.create(author)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Some error occurred while creating new Author"});
        })
}

exports.findAll = (req, res) => {
    Author.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving authors"
            })
        })
}


// ......./authors/2
exports.findOne = (req, res) => {
    const id = req.params.id;

    Author.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Cannot find Author with Id=" + id
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving author with ID=" + id
            })
        })
}


// put ...../authors/id
exports.update = (req, res) => {
    const idParam = req.params.id;

    Author.update(req.body, {
        where: {id: idParam}
    })
        .then(data => {
            if (data == 1) {
                Author.findByPk(idParam)
                    .then(data => {res.send(data);})
                    .catch(err => {res.status(500).send({message: err.message})})
            } else {
                res.status(400).send({
                    message: "Cannot update Author with Id=" + idParam
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating"
            })
        })
}

/*

Deleting

delete ..../authors/id

Author.destroy({
    where: {id: id}
}).then(numRows => {}).catch(err => {})

Author.destroy({
    where:{},
    truncate: false
}).then(numRows => {}).catch(err => {})

 */