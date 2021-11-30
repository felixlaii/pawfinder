const express = require('express');
const app = express();
const usersRoute = require('./routes/usersRoute')
const petRoute = require('./routes/petRoute')
const knex = require('knex')(require('./knexfile').development);
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/users", usersRoute);
app.use('/', petRoute)
app.get('/users', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(PORT, () => {
    console.log(`${PORT}`);
  });