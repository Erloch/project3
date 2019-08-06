const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bucketListSchema = new Schema({
    activity: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    image: String,
    date: { type: Date, default: Date.now }
    
});
const BLItem = mongoose.model("BLItem", bucketListSchema);
module.exports = BLItem;



