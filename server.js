//example of how to use flash messages
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash"); //flash messages
const path = require("path");

//storing and using session information
const sessionsOptions = {
  secret: "mysecretecode",
  resave: false,
  saveUninitialized: true,
};

//views set middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//sessions middleware
app.use(session(sessionsOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  req.flash("success", "user registered successfully"); //this is a key , message pair store
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("flash.ejs", {
    name: req.session.name,
    msg: req.flash("success"),
  }); //success is a flash message key
});

app.listen(3000, () => {
  console.log("App is listening on port");
});
