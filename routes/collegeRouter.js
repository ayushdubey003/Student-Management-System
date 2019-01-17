var express = require('express');

const app = express();
var router = express.Router();

const College = require('../models/college');

var colleges=[];
//To fetch the list of colleges
//http://localhost:3000/api/colleges

router.get('/', function(req, res){
    College.find({}, function(err, college){
        res.json(college);
    });
});


router.post('/', function(req, res){
    var college_name = req.body.name;
    const college = new College({
        name : college_name
    });
    college.save().then(function(){
        res.json(college);
    });
})

router.get('/:college_id',function(req,res){
    var cid=req.params.college_id;
    College.find({_id:cid},function(err,college){
        for(var i=0;i<college.length;i++)
            res.send(college[i].name);
    });
});

module.exports = router;