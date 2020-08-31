const cron = require("node-cron");
const Ticket = require("./../app/models/tickets")
const moment = require('moment-timezone')
cron.schedule("*/30 * * * *", function() {
    console.log("---------------------");
    console.log("Running Cron Job");
    var now = new Date()
    now.setHours(now.getHours()-8);
    var now = moment(now);
    Ticket.updateMany({date:{$gte:now},expired:false},{expired:true},function(err,tickets){
        if(err) throw err;
        console.log(tickets);
    })
})