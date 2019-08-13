const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bucketListSchema = new Schema({
    activity: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    image: String,
    completed: { type:Boolean, default: false },
    recommended: {type: Boolean, default: true},
    onBlist: {type:Boolean, default: true},
    date: { type: Date, default: Date.now },
    userID:{ type: String, required: true }
    
});
const BLItem = mongoose.model("BLItem", bucketListSchema);
module.exports = BLItem;



