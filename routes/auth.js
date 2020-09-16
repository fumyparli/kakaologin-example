const express = require("express");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { User } = require("../models");
const router = express.Router();

router.get("/logout", isLoggedIn, (req, res) => {
    req.logout(); // delete req.user
    req.session.destroy(); // req.user in fact, not needed
    res.redirect("/");
});

router.get("/kakao", passport.authenticate("kakao"));

router.get(
    "/kakao/callback",
    passport.authenticate("kakao", {
        failureDirect: "/", // 로그인 실패시
    }),
    (req, res) => {
        console.log("카톡!카톡!");
        res.redirect("/");
    }
);

module.exports = router;
