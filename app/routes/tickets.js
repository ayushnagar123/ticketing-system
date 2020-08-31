var express = require('express');
var router = express.Router();
var {response} = require('../utils/response_handler')
var {error} = require('../utils/error_handler');
var Ticket = require('./../models/tickets')
var Hall = require('../models/show')
const moment = require('moment-timezone')
const check = require('../controllers/users')
/* GET home page. */
router.get(
  '/', 
  function(req, res, next) {
  var {ticketId} = req.query;
  Ticket.findOne({ticketId:ticketId},(err,ticket)=>{
    if(err) throw err;
    res.send(
      response(
        200,
        'ticket data',
        ticket
      )
    )
  })
});

router.post(
  '/create',
  function(req, res, next){
    var {date,showNumber,people,phoneNumber,name,hallNumber} = req.body;
    var {token,refreshtoken} = req.headers;
    moment.tz("Asia/Kolkata");
    var schedule = new Date();
    console.log(date.day,date.month,date.year)
    schedule.setDate(date.day);
    schedule.setMonth(date.month-1);
    schedule.setFullYear(date.year);
    schedule.setHours(date.hours);
    schedule.setMinutes(date.minutes);
    schedule.setSeconds(0);
    var m = moment(schedule);
    console.log(m);
    check.user(phoneNumber,token,refreshtoken)
    .then(isUser=>{
      console.log("isUser=",isUser);
      if(isUser){
        var data = {
          owner:name,
          phoneNumber: phoneNumber,
          booking:new Date(),
          date:m,
          showNumber:showNumber,
          people:people,
          hallNumber:hallNumber
        }
        console.log(data)
        return data;
      }
      else{
        res.send(error(403,"please login to book a seat"))
      }
    })
    .then(data=>{
      console.log("data=",data)
      Ticket.aggregate([
        {$match :{hallNumber:data.hallNumber,timing:data.timing}},
        {$group :{_id:null,occupied:{$sum:"$people"},tickets: { "$addToSet": "$$ROOT"||[] }}}
      ],(err,result)=>{
        var occupied;
        if(err) throw err;
        if(result.length===0){occupied=0;}
        else{
          occupied=result[0].occupied;
        }
        if(data.people<=20-occupied){
          var newTicket = new Ticket(data);
          newTicket.save((err, ticket)=>{
            if(err) throw err;
            res.send(response(200,"Ticket generated successfully",data));
          });
        }
        else{
          res.send(error(404,"Not enough vacant seats found please choose another slot time."))
        }
      })
    })
    .catch(err=>{throw err;})
  })

router.patch(
  '/',
  function (req, res, next){
    var {ticketId,phoneNumber,people,showNumber,date,hallNumber,used} = req.query;
    var {token,refreshtoken} = req.headers;
    check.user(phoneNumber,token,refreshtoken)
    .then(isUser=>{
      if(isUser){
        var data={};
        if(people!==undefined){
          data.people=people
        }
        if(date!==undefined){
          data.showNumber=showNumber;
          data.date = date;
          data.hallNumber=hallNumber;
        }
        if(used!==undefined){
          data.used=used;
        }
        Ticket.findOneAndUpdate({ticketId:ticketId,phoneNumber:phoneNumber},data,{new:1},
          (err,ticket)=>{
            if(err) throw err;
            res.send(response(200,"ticket updated successfully",ticket))
          })
      }
      else{
        res.send(error(403,"please login to update a seat"))
      }
    })
    .catch(err=>{throw err;})
  }
)

router.delete(
  '/',
  function (req, res, next){
    var {ticketId,phoneNumber} = req.query;
    var {token,refreshtoken} = req.headers;
    check.user(phoneNumber,token,refreshtoken)
    .then(isUser=>{
      if(isUser){
        // if(people!==undefined)
        Ticket.findOneAndDelete({ticketId:ticketId,phoneNumber:phoneNumber},
          (err,ticket)=>{
            if(err) throw err;
            res.send(response(200,"ticket deleted successfully",ticket))
          })
      }
      else{
        res.send(error(403,"please login to update a seat"))
      }
    })
    .catch(err=>{throw err;})
  }
)

module.exports = router;
