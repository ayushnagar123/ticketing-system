var express = require('express');
var router = express.Router();
var {response} = require('./../utils/response_handler')
var {error} = require('./../utils/error_handler');
/* GET users listing. */
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

module.exports = router;
