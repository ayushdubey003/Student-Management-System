var express = require('express');

const app = express();
var router = express.Router();

const Student = require('../models/student');//importing student schema from pre-defined model

//To fetch the list of colleges
//http://localhost:3000/api/students

router.get('/', function(req, res){
    Student.find({}).
        populate('name').
        then(student=>{
            res.json(student);
        }).
        catch(function(err){
            console.log(student.name);
        });
    });


router.post('/', function(req, res){
    var student_name = req.body.name;
    var student_email = req.body.email;
    var student_reg_no = req.body.reg_no;
    var collegeID = req.body.college_id;
    const student = new Student({
        name : student_name,
        email : student_email,
        reg_no : student_reg_no,
        college_id: collegeID
    });

    student.save().then(function(){
        res.json(student);
    })
});

router.get('/:college_id', function(req, res){
    var sid=req.params.college_id;
    Student.find({college_id:sid},function(err,student){
        res.json(student);
    })
});

router.delete('/:student_id',function(req,res){
    var sid=req.params.student_id;
    Student.findOneAndDelete({_id:sid},function(err,student){
        res.send("Student deleted");
    })
});

module.exports = router;