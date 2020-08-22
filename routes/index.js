const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("success!");
    res.send("<h1>success!!!<h1>");
});

module.exports = router;