const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("./model");
const router = new Router();

//CRUD CREATE
router.post("/user", (request, response, next) => {
  // const { email, password } = request.body;

  User.create({
    email: request.body.email,
    password: bcrypt.hashSync(request.body.password, 10)
  })
    .then(user => {
      response.json(user);
    })
    .catch(error => next(error));
});

module.exports = router;
