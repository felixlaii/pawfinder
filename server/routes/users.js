const router = require("express").Router();
const jwt = require("jsonwebtoken");
const authorize = require("../middleware/authorize");

const users = [
    {
      name: 'Luke Skywalker',
      username: 'lovetheforce',
      password: 'vaderiscool'
    },
    {
      name: 'Anakin Skywalker',
      username: 'sandsucks',
      password: 'palpatineismean'
    }
  ];

  router.get('/current', authorize, (req, res) => {
      const usernameFromToken = req.decoded.username;

      const foundUser = users.find(user => user.username === usernameFromToken)

      if(!foundUser) {
          return res.status(400).json({
              message: "unable to find user"
          })
      }

      //send back full user data
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

      //username and password are provided

      const foundUser = users.find(user => user.username === username)

      if(!foundUser) {
          return res.status(400).json({
              message: "user does not exist"
          })
      }

    // we are guaranteed to have the user here
    // Validate password matches user's password
    if(foundUser.password !== password) {
        //invalid password, return response
        return res.status(400).json({
            message: "invalid credentials, password does not match"
        })
    }

    // it is a valid password at this point, 
    // create and return JWT
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

    // at this point, we are guaranteed to have a 
    // name, username, and password    
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

    users.push(newUser)
    res.sendStatus(200)
  })

  module.exports = router;