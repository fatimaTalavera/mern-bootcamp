const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 3
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	description: {
		type: String
	}
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;