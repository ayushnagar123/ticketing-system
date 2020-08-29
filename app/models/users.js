const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const TokenGenerator = require('uuid-token-generator');
const tokgen = new TokenGenerator();
const saltRounds = 8;
const {error} = require('./../utils/error_handler.js')
const {response} = require('./../utils/response_handler.js');
// const { status } = require('../utils/status_handler.js');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name: String,
    phoneNumber: String,
    password: String,
    token:String,
    refreshToken: String
});

UsersSchema.statics.findByCredentials = async (data) => {
    console.log(data)
    // return data;
    const user = await UsersModel.findOne({
      phoneNumber: data.phoneNumber
    })

    if (!user) {
      return error(403,'No such user')
    } 
    else {
        var isMatchPass = false;
        var isMatchToken = false;
        var isMatchRefreshToken = false;
        if(data.password!==undefined){
            isMatchPass = await bcrypt.compare(data.password, user.password)
        }
        if(data.token!==undefined){
            isMatchToken = await (data.token===user.token);
        }
        if(data.refreshToken!==undefined){
            isMatchRefreshToken = await (data.refreshToken === user.refreshToken);
        }
        if(isMatchToken){
            return response(200,"Loged in successfully",{name:user.name, refreshToken:user.refreshToken,token:user.token,phonenumber:user.phoneNumber});
        }
        else if(isMatchRefreshToken){
            var token1 = tokgen.generate();
            return response(200,"Loged in successfully",await UsersModel.findOneAndUpdate({phoneNumber:data.phoneNumber},{token:token1},{fields:{password:0,_id:0,__v:0},new:true}))
        }
        else if (!isMatchPass) {
            return error(401,'Incorrect password provided')
        }
        else {
            return response(200,"Loged in successfully",{name:user.name, refreshToken:user.refreshToken,token:user.token,phonenumber:user.phoneNumber});
        }
    }
  }
  

UsersSchema.pre('save', async function (next) {
    const user = this
    if(user.password===undefined){
        return error(400,"password required")
    }
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, saltRounds)
    }
  
    next()
  })
// Compile model from schema
var UsersModel = mongoose.model('users', UsersSchema );

module.exports = UsersModel