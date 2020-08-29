const express = require('express');
const router = express.Router();
const {response} = require('./../utils/response_handler')
const {error} = require('./../utils/error_handler');
const Users = require('./../models/users')
const TokenGenerator = require('uuid-token-generator');
const tokgen = new TokenGenerator();
const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);

router.get(
  '/', 
  function(req, res, next) {
  res.send(
    response(
      200,
      'welcome to users portal',
      {
        name:"Ayush Nagar",
        ticket:18371983
      }
    )
  )
});

router.post(
  '/signup',
  function (req,res,next) {
    var {name,phoneNumber,password} = req.body;
    var token = tokgen.generate();
    var refreshToken = tokgen2.generate();
    
    var data = {
      name,
      phoneNumber,
      password,
      token,
      refreshToken
    };
    
    var newUser = new Users(data);
    console.log(newUser);
    newUser.save();
    
    res.send(
      response(
        201,
        'User created successfully',
        {
          token,
          refreshToken
        }
      )
    )

  }
)

router.post(
  '/login',
  async function (req, res, next){
    var {phoneNumber,password} = req.body;
    var {token,refreshtoken} = req.headers;
    console.log(refreshtoken)
    var resp = await Users.findByCredentials({phoneNumber:phoneNumber,password:password,token:token,refreshToken:refreshtoken})
    console.log(resp);
    res.send(resp);
  }
)

module.exports = router;
