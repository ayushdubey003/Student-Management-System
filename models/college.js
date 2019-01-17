var mongoose = require('mongoose');

var  collegeSchema = new mongoose.Schema({
    name : {
        type : String 
    }
});

const college = mongoose.model('College', collegeSchema);//for object creation

module.exports = college;