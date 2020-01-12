const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8080);

// serving static files
app.use(express.static('public'));

// template engine
app.set("view engine", "ejs");
const layouts = require("express-ejs-layouts");
app.use(layouts);

// contollers
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

// middleware
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

// routes
app.get('/', homeController.home);
app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showSignUp);
app.post('/contact', homeController.postedSignUpForm);

// error routes
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// server
app.listen(app.get('port'), () => {
  console.log(`Server is running at port ${app.get('port')}`);
});
