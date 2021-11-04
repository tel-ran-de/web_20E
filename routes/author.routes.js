module.exports = app => {
    const authors = require('../controllers/author.controller');
    const router = require("express").Router()

    router.get("/", authors.findAll);  // server:port/api/authors/
    router.post("/", authors.create);
    router.get("/:id", authors.findOne);
    router.put("/:id", authors.update);


    app.use('/api/authors', router);
}