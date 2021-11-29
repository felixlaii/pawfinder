const router = require("express").Router();
const axios = require('axios')
require("dotenv").config();
const BEARER_TOKEN = process.env.BEARER_TOKEN;

router.get('/', (req, res) => {
	axios.get('https://api.petfinder.com/v2/animals', {
		headers: {
			 Authorization: `Bearer ${BEARER_TOKEN}`
		}
	}).then ((response) => {
		 res.status(200).json(response.data)
	}).catch ((error) => res.status(400).send({message: error}))
})

router.get('/organizations', (req, res) => {
	axios.get('https://api.petfinder.com/v2/organizations', {
		headers: {
			 Authorization: `Bearer ${BEARER_TOKEN}`
		}
	}).then ((response) => {
		 res.status(200).json(response.data)
	}).catch ((error) => res.status(400).send({message: error}))
})


module.exports = router;
