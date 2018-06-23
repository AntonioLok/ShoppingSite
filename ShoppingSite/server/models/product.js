var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var ObjectId = require('mongodb').ObjectID

var productSchema = mongoose.Schema({
	name: String,
	price: Number,
	category: String,
	type: String,
	sizeSelected: Number,
	amount: Number,
	img: String,
	sizeAvailable: String
});

productSchema.statics.getProducts = function(callback) {
	ProductModel.find({}, function (err, products) {
		if (err) {
			return callback(err);
		} else {
			return callback(null, products);
		}
    });
};

productSchema.statics.getProduct = function (id, callback) {
	ProductModel.findById(id, function (err, product) {
		if (err) {
			return callback(err);
		} else {
			return callback(null, product);
		}
	});
}

var ProductModel = mongoose.model('Product', productSchema);
module.exports = mongoose.model('Product', productSchema);