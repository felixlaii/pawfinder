const router = require('express').Router();
const jwt = require("jsonwebtoken");
const authorize = require("../middleware/authorize");

router.get('/v2/animals', authorize, (req, res) => {
   

})


module.exports = router;