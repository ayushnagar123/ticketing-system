const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
        a_string: String,
         a_date: Date
});
// Compile model from schema
var UserModel = mongoose.model('users', UserSchema );

module.exports ={
    UserModel
}