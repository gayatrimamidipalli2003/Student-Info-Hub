import { useState } from "react";
import axios from "axios";
const Register = () =>{
    const [Formdata,setFormdata]=useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':'',
    })
    let backend_api="http://localhost:3000/students"
    const handlesubmit =(e)=>{
        const Inputfields = new FormData()
        Inputfields.append('name',Formdata.name)
        Inputfields.append('rollno',Formdata.rollno)
        Inputfields.append('college',Formdata.college)
        Inputfields.append('branch',Formdata.branch)
        e.preventDefault();
        console.log(Formdata)
        // axios.post('http://localhost:5000/addstud',{Formdata}).then((res)=>console.log(res.data))
        axios.post(backend_api,Inputfields).then((res)=>{
            console.log(res)
            if(res.status===200)
            {
                alert("success")
            }
        })
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handlesubmit} >
                <label>Name:</label>
                <input 
                type="text" 
                name="name" 
                onChange={(e)=>setFormdata({...Formdata,name:e.target.value})}/>
                <br />
                <br />
                <label>Roll No:</label>
                <input 
                type="text" 
                name="rollno" 
                onChange={(e)=>setFormdata({...Formdata,rollno:e.target.value})}/>
                <br />
                <br />
                <label>College:</label>
                <input 
                type="text" 
                name="college" 
                onChange={(e)=>setFormdata({...Formdata,college:e.target.value})}/>
                <br />
                <br />
                <label>Branch:</label>
                <input 
                type="text" 
                name="branch" 
                onChange={(e)=>setFormdata({...Formdata,branch:e.target.value})}/>
                <br />
                <br />
                <br/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Register