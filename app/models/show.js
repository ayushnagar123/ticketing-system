const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShowSchema = new Schema({
        showNumber:{type:String},              // show number
        hallNumber:{type:Number},              // show location
        date:{type:Date},                      // show date
        status:{type:String,default:"Open"},   // Open,Closed,Cancled
});

ShowSchema.pre('save', async function(next) {
    if (this.isNew) {
        const showNumber = await ShowModel.find({}).count()+1;
        this.showNumber = showNumber; // Incremented
        next();
    } else {
        next();
    }
});

var ShowModel = mongoose.model('shows', ShowSchema );

module.exports = ShowModel;