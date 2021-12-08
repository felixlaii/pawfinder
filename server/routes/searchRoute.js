const router = require("express").Router();
const axios = require("axios");
const knex = require("knex")(require("../knexfile").development);

router.get("/species/:species", (req, res) => {
  knex
    .select("*")
    .from("token")
    .orderBy("id", "desc")
    .limit(1)
    .then((data) => {
      data = data[0];
      axios
        .get("https://api.petfinder.com/v2/animals", {
          headers: {
            Authorization: `Bearer ${data.auth_token}`,
          },
        })
        .then((response) => {
          console.log(response);
          let filteredAnimals = response.data.animals.filter(
            (animal) => animal.type.toLowerCase() === req.params.species
          );
          res.status(200).json(filteredAnimals);
        });
    })
    .catch((error) => res.status(400).send([]));
});

router.get("/searchbreed/:breed", (req, res) => {
  knex
    .select("*")
    .from("token")
    .orderBy("id", "desc")
    .limit(1)
    .then((data) => {
      data = data[0];
      axios
        .get("https://api.petfinder.com/v2/animals", {
          headers: {
            Authorization: `Bearer ${data.auth_token}`,
          },
        })
        .then((response) => {
          let filteredBreeds = response.data.animals.filter(
            (animal) => animal.breeds.primary.toLowerCase() === req.params.breed
          );
          res.status(200).json(filteredBreeds);
        });
    });
});

router.get("/searchage/:age", (req, res) => {
  knex
    .select("*")
    .from("token")
    .orderBy("id", "desc")
    .limit(1)
    .then((data) => {
      data = data[0];
      axios
        .get("https://api.petfinder.com/v2/animals", {
          headers: {
            Authorization: `Bearer ${data.auth_token}`,
          },
        })
        .then((response) => {
          let filteredAge = response.data.animals.filter(
            (animal) => animal.age.toLowerCase() === req.params.age
          );
          res.status(200).json(filteredAge);
        });
    });
});

module.exports = router;
