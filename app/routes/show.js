var express = require('express');
var router = express.Router();
var {response} = require('../utils/response_handler')
var {error} = require('../utils/error_handler');
var Show = require('../models/show');
const { reset } = require('nodemon');
const check = require('../controllers/users')
const moment = require('moment-timezone')
/* GET home page. */
router.get(
  '/', 
  function(req, res, next) {
  res.send(
    response(
      200,
      'welcome to halls portal',
      {
        name:"Ayush Nagar",
        ticket:18371983
      }
    )
  )
});

router.post(
    '/create',
    async function(req, res, next){
        var {date,hallNumber} = req.body;

        check.admin(req.headers["token"],req.headers["refreshtoken"])
        .then(async isAdmin=>{
            console.log("isAdmin=",isAdmin)
            if(isAdmin){
                // console.log(timing);
                console.log(date)
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
                if(schedule>=new Date()){
                    var data={
                        date:m,
                        hallNumber:hallNumber
                    }
                    
                    var newShow = await new Show(data);
                    newShow.save();
                    res.send(
                        response(
                            201,
                            "Sh+ow created successfully",
                            newShow
                        )
                    );
                }
                else{
                    res.send(error(400,"Date must be greater than present date"))
                }
            }
            else{
                res.send(error(403,"You dont have permission to create show"))
            }
        })
    }
)

router.get(
    '/getVacantSeats',
    function (req, res, next){
    
            Show.find({},{hallNumber:1,timings:1,vacantSeats:1,row:5,column:1})
                .then(data=>{
                    checkReset(data);
                    console.log(data)
                    res.send(
                        response(
                            200,
                            "Show Vacency data",
                            data
                        )
                    )
                })
                .catch(err=>res.send(error(500,err.message)))
        // .catch(err=>res.send(error(500,"error occured while validating your permissions")))
    }
)

module.exports = router;
