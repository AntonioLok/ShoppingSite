var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var ObjectId = require('mongodb').ObjectID

var userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  productsSelected: { type: Array }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.user.password);
};

//authenticate input against database
userSchema.statics.authenticate = function (email, password, callback) {
	UserModel.findOne({ username: email }).exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
		  var err = new Error('Password does not match');
          return callback(err);
        }
      })
    });
}

userSchema.statics.getCart = function (id, callback) {
	UserModel.findById(id, function (err, user) {
		if (err) {
			return callback(err);
		} else {
			return callback(null, user.productsSelected);
		}
	});
}

userSchema.statics.updateCart = function (id, newValue, callback) {
	UserModel.findByIdAndUpdate(id, {productsSelected: newValue}, {new: true}, function(err, user) {
		return callback(user);
	});
}

var UserModel = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);