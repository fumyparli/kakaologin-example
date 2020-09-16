const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
const pug = require("pug");
const passport = require("passport");
dotenv.config(); // 비번안전하게

const indexRouter = require("./routes");
const authRouter = require("./routes/auth");
const passportConfig = require("./passport");
const { sequelize } = require("./models");

const app = express();
sequelize.sync();
passportConfig(passport);
// test

app.set('port', process.env.PORT || 80);
app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: true,
    saveUnitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        //secure: false
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

const server = app.listen(app.get("port"), () => {
    console.log(`excuting OneWeekServer ${app.get("port")}at port`);
});