
const mongoose =require('mongoose');

const userschema = new mongoose.Schema({
    first_name: String,
    last_name:String,
    time:Date,
    school:String,

})

const userModel = mongoose.model('todos',userschema);

module.exports = userModel;