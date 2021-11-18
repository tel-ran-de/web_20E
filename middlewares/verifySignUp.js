const db = require('../models')
const User = db.user

const checkDuplicateEmail = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                res.status(400).send({
                    message: 'Failed! Email already in use'
                })
                return;
            }
            next()
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

const verifySignUp = {
    checkDuplicateEmail
}

module.exports = verifySignUp