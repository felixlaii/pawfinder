const router = require("express").Router();
const axios = require("axios");
// const knex = require('knex')(require('../knexfile').development);

require("dotenv").config();
const BEARER_TOKEN = process.env.BEARER_TOKEN

router.get("/search/:searchquery", (req, res) => {
  // knex.select("*").from("token").orderBy("id", "desc").limit(1)
  // .then((data) => {
      // console.log(data[0].auth_token)
      axios
      .get("https://api.petfinder.com/v2/animals", {
          headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        })
        .then((response) => {
            let filteredAnimals = response.data.animals.filter(
                (animal) => animal.name.toLowerCase().includes(req.params.searchQuery))
            res.status(200).json(response.data);
        })
        // .catch((error) => (console.log(data)))
        .catch((error) => res.status(400).send({ message: error }));
    });
// });

module.exports = router;
