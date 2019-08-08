const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bucketListSchema = new Schema({
    activity: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    image: String,
    completed: { type:Boolean, default: false },
    reccommended: {type: Boolean, default: true},
    onBList: {type: Boolean, default: false},
    date: { type: Date, default: Date.now }
    
});
const BLItem = mongoose.model("BLItem", bucketListSchema);
module.exports = BLItem;



