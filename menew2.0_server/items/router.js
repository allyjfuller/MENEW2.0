'use strict';
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('../config')
const router = express.Router()
const jwtAuth = passport.authenticate('jwt', {session: false})
const { Item } = require('./models')

router.use(bodyParser.json())

router.post('/', (req, res) => {
	Item
	.create(req.body)
	.then(items => {res.status(200).json(items)})
	.catch(err => {res.status(500).json({message: 'Server Error'})
	})
})

router.get('find/:itemName', (req, res) => {
	Item
	.find({name:{"$regex":req.params.itemName, "$options":"i"}})
	.then(items => {res.status(200).json(items)})
	.catch(err => {res.status(500).json({message: 'Server Error'})
	})
})

router.get('/:currentUser', (req, res) => {
	Item
	.find({userEmail:req.params.currentUser})
	.then(items => {res.status(200).json(items)})
	.catch(err => {res.status(500).json({message: 'Server Error'})
	})
})

router.get('/', (req, res) => {
  Item
  .find({})
  .sort({'datePublished': -1}).limit(30)
  .then(items => {res.status(200).json(items)})
  .catch(err => {res.status(500).json({message: 'Server Error'})
	})
})

router.put('/:_id', (req, res) => {
	const requiredFields = ['name', 'price', 'description'];
	for (let i=0; i<requiredFields.length; i++) {
		const field = requiredFields[i];
		if (!(field in req.body)) {
			const message = `Missing ${field} in request body`
			console.error(message);
			return res.status(400).send(message);
		}
	}
	if (req.params._id !== req.body._id) {
		const message = `Request path id ${req.params._id} and request body id ${req.body._id} must match`;
		console.error(message);
		return res.status(400).send(message);
	}
	console.log(`Updating item ${req.params._id}`);
	Item
	.findByIdAndUpdate(req.params._id, {$set: req.body}, {new: true})
	.then(items => res.status(200).json(items))
	.catch(err => {res.status(500).json({message: 'Server Error'});	
	})
})

router.delete('/:_id', (req, res) => {
  Item
  .findByIdAndRemove(req.params._id)
  .then(items => {res.status(200).json(items)})
  .catch(err => {res.status(500).json({message: 'Server Error'})
	})
})

module.exports = {router};