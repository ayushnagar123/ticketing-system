const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
        ticketId:{type:Number},
        owener:{type:String},
        phoneNumber:{type:String},
        hallNumber:{type:Number},
        date:{type:Date},
        booking:{type:Date},
        people:{type:Number},
        used:{type:Boolean,default:false}
});

TicketSchema.pre('save', async function(next) {
        if (this.isNew) {
            const ticketId = await TicketModel.find({}).count()+1;
            this.ticketId = ticketId; // Incremented
            next();
        } else {
            next();
        }
});

var TicketModel = mongoose.model('tickets', TicketSchema );

module.exports = TicketModel;