const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
        owener:{type:String},
        hall:{type:Number},
        row:{type:Number},
        column:{type:Number},
        date:{type:Date},
        booking:{type:Date},
        payment:{type:Boolean,default:false},
        payementType:{type:String,default:"Cash"},
        expired:{type:Boolean,default:false}
});

var TicketModel = mongoose.model('tickets', TicketSchema );

module.exports = TicketModel;