const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
        a_string: String,
         a_date: Date
});
// Compile model from schema
var TicketModel = mongoose.model('tickets', TicketSchema );

module.exports ={
    TicketModel
}