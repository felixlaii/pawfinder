const express = require("express");
const app = express();
const usersRoute = require("./routes/usersRoute");
const petRoute = require("./routes/petRoute");
const searchRoute = require("./routes/searchRoute");
const knex = require("knex")(require("./knexfile").development);
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", (req, res, next) => {
  knex
    .select("*")
    .from("token")
    .orderBy("id", "desc")
    .limit(1)
    .then((data) => {
      data = data[0];
      let currentTime = Date.now();
      if (!data || currentTime - data.created_at >= 3600000) {
        axios
          .post(
            "https://api.petfinder.com/v2/oauth2/token",
            "grant_type=client_credentials&client_id=Irlgp1H9i7TVwwg75zoLXde1qwqUqtm5H0HkwsfiDuFpbVVSnG&client_secret=WBsI6pxWtf33UEyVAFKkailwuN1dyN8ssVVqU4Um",
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
            knex("token")
              .insert({
                auth_token: response.data.access_token,
                created_at: Date.now().toString(),
              })
              .then((result) => {
                console.log(result);
              })
              .catch((error) => console.log(error));
          });
      }
    });
  next();
});
app.use("/users", usersRoute);
app.use("/", petRoute);
app.use("/search", searchRoute);
app.get("/users", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`${PORT}`);
});
