const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
        owener:{type:String},
        phoneNumber:{type:String},
        hallNumber:{type:Number},
        date:{type:Date},
        booking:{type:Date},
        seats:[{type:Number}],
        people:{type:Number},
        used:{type:Boolean,default:false}
});

var TicketModel = mongoose.model('tickets', TicketSchema );

module.exports = TicketModel;