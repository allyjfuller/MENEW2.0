const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	userEmail: {type: String, required: true}
	name: {type: String, required: true},
	price: {type: String, required: true},
	description: {type: String, required: true},
	establishmentName: {type: String, required: true},
	establishmentType: {type: String, required: true},
	datePublished: {type: String, required:true}

})

const Item = mongoose.model('Item', itemSchema)

module.exports = {Item};