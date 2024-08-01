//schema
// import mongoose from "mongoose";
const mongoose= require('mongoose');
const student=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
})
//export default mongoose.model("student",student)
//export default mongoose.model("collectionname",schemavariablename);
const Student = mongoose.model('student',student);
 module.exports=Student;