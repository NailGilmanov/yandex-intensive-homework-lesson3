const router = require('express').Router();
const { books, reviews, users } = require('./mock');
const { reply, getById } = require("./utils")

router.get("/books", (req, res, next) => {
    reply(res, books)
})

router.get("/reviews", (req, res, next) => {
    reply(res, reviews)
})

router.get("/users", (req, res, next) => {
    reply(res, users)
})

module.exports = router;