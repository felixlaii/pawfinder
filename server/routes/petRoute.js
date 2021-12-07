const router = require("express").Router();
const axios = require("axios");
const knex = require('knex')(require('../knexfile').development);

router.get("/", (req, res) => {
  knex.select("*").from("token").orderBy("id", "desc").limit(1)
  .then((data) => {
    data = data[0];
      axios
        .get("https://api.petfinder.com/v2/animals", {
          headers: {
            Authorization: `Bearer ${data.auth_token}`,
          },
        })
        .then((response) => {
          res.status(200).json(response.data);
        })
        .catch((error) => res.status(400).send({ message: error }));
    });
});

router.get("/organizations", (req, res) => {
  knex.select("*").from("token").orderBy("id", "desc").limit(1)
    .then((data) => {
      data = data[0];
      axios
        .get("https://api.petfinder.com/v2/organizations", {
          headers: {
            Authorization: `Bearer ${data.auth_token}`,
          },
        })
        .then((response) => {
          res.status(200).json(response.data);
        })
        .catch((error) => res.status(400).send({ message: error }));
    })
});

module.exports = router;
