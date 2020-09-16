const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { User } = require("../models");
const router = express.Router();
const nunjucks = require("pug");

// main page
router.get("/", (req, res, next) => {
    // 찾아서 게시물 rendering
    res.render("main", {
        title: "OneWeek",
        user: req.user
    });
});

module.exports = router;
