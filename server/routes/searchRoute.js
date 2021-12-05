const router = require("express").Router();
const axios = require("axios");
const knex = require('knex')(require('../knexfile').development);

router.get("/search/:species/:age/:breeds", (req, res) => {
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
            let animals = response.data.animals
            let filteredAnimals = animals.filter((animal) => { 
                return animal.species.toLowerCase().includes(req.params.species)
            })
           
            let filteredAge = filteredAnimals.filter((animal) => {
                return animal.age.toLowerCase().includes(req.params.age)
            })

            let filteredBreeds = filteredAnimals.filter((animal) => {
                return animal.breeds.primary.toLowerCase().includes(req.params.breeds)
            })
                         
            res.status(200).json(filteredAnimals)
            res.status(200).json(filteredAge)
            res.status(200).json(filteredBreeds)
        })
        .catch((error) => res.status(400).send([]));
    });
});

module.exports = router;
