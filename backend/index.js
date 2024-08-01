const express= require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
// import bodyParser from 'body-parser';
// import multer from 'multer';
// import cors from 'cors';
// import session from 'express-session';
// import connectMongo from 'connect-mongo';
// import MongoStore from 'connect-mongo'; 
//import student from './models/student';
const student = require('./models/student');
const app = express();
//const MongoStore = connectMongo(session);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongoURI = 'mongodb+srv://gayatrimamidipalli0:UfF0L227drTyCXMG@cluster0.c6ujgk6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.post('/students',async(req,res,next)=>{
    // console.log(req.body)
    // //res.send("Success")
    // res.send({rollno:req.body.rollno})
//})
    const {name,rollno,college,branch} = req.body;
    const stud = new student({
        name,
        rollno,
        college,
        branch
    })
    try{
      stud.save()
     }
     catch(err){
         console.log(err);
     }
     return res.send({msg:"inserted",result:stud})
})
// Backend - Add a route to fetch all students
// app.get('/students', async (req, res) => {
//     try {
//         // Fetch all students from the database
//         const students = await student.find();
        
//         // Respond with the fetched students
//         return res.status(200).json(students);
//     } catch (error) {
//         console.error("Error fetching students:", error);
//         return res.status(500).json({ error: "An error occurred while fetching students." });
//     }
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 