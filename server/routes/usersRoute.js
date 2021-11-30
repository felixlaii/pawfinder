const router = require("express").Router();
const jwt = require("jsonwebtoken");
const authorize = require("../middleware/authorize");
const knex = require('knex')(require('../knexfile').development);


let users = []
knex('users')
.then((data) => {
   users = data;
})
.catch((err) => 
res.status(400).send(`error retrieving users`))


  router.get('/current', authorize, (req, res) => {
      const usernameFromToken = req.decoded.username;

      const foundUser = users.find(user => user.username === usernameFromToken)

      if(!foundUser) {
          return res.status(400).json({
              message: "unable to find user"
          })
      }
      return res.json({
        username: foundUser.username,
        name: foundUser.name
      })
  })

  router.post('/login', (req, res) => {
      const { username, password } = req.body

      if(!username || !password) {
          return res.status(400).json({
              message: "login requires username and password!"
          })
      }

      const foundUser = users.find(user => user.username === username)

      if(!foundUser) {
          return res.status(400).json({
              message: "user does not exist"
          })
      }

    if(foundUser.password !== password) {
        return res.status(400).json({
            message: "invalid credentials, password does not match"
        })
    }

    const token = jwt.sign(
        { username: username },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h"}
    )

    res.json({
        message: "successfully loggin in",
        token: token
    })
  })

  router.get('/userpreferences/:userId', (req, res) => {
      console.log(req.user)
      knex('users').where('userId', req.params.userId).then((response) => res.send(response))
  })

  router.post('/register', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;
    const searchRadius = req.body.searchRadius;
    const animalType = req.body.animalType;
    const breed = req.body.breed;
    const age = req.body.age;

    if(!firstName || !lastName || !username || !password || !searchRadius || !animalType || !breed || !age) {
        return res.status(400).json({
            message: "registration requires all fields"
        })
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        searchRadius: searchRadius,
        animalType: animalType,
        breed: breed,
        age: age
    }

    knex('users').insert({
        firstName: newUser.firstName, 
        lastName: newUser.lastName, 
        username: newUser.username,
        password: newUser.password,
        searchRadius: newUser.searchRadius,
        animalType: newUser.animalType,
        breedType: newUser.breed,
        age: newUser.age 
    })
    .then((_result) => {
        knex('users')
        .then((data) => {
            users = data
        })
    })
    res.sendStatus(200)
  })

  module.exports = router;