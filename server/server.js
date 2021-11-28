const express = require('express');
const app = express();
const usersRoute = require('./routes/users')
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use("/users", usersRoute);

app.listen(PORT, () => {
    console.log(`YOU GOT THIS BITCH!`);
  });