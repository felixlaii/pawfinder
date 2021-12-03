const router = require("express").Router();
const axios = require("axios");
const knex = require('knex')(require('../knexfile').development);

router.get("/search/:searchquery", (req, res) => {
  knex.select("*").from("token").orderBy("id", "desc").limit(1)
  .then((data) => {
      data = data[0];
    //   console.log(data[0].auth_token)
      axios
      .get("https://api.petfinder.com/v2/animals", {
          headers: {
              Authorization: `Bearer ${data.auth_token}`,
            },
        })
        .then((response) => {
            let animals = response.data.animals
            let filteredAnimals = animals.filter((animal) => {
                
                return animal.species.toLowerCase().includes(req.params.searchquery)
            })                
            res.status(200).json(filteredAnimals);
        })
        // .catch((error) => (console.log(data)))
        .catch((error) => res.status(400).send({ message: error }));
    });
});

module.exports = router;
