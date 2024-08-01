import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollno: '',
        college: '',
        branch: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/students", formData);
            alert("Data submitted successfully");
            // Clear form data after successful submission
            setFormData({
                name: '',
                rollno: '',
                college: '',
                branch: '',
            });
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("An error occurred while submitting data");
        }
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <br />
                <br />
                <label>Roll No:</label>
                <input
                    type="text"
                    name="rollno"
                    value={formData.rollno}
                    onChange={(e) => setFormData({ ...formData, rollno: e.target.value })}
                />
                <br />
                <br />
                <label>College:</label>
                <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                />
                <br />
                <br />
                <label>Branch:</label>
                <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Register;
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         rollno: '',
//         college: '',
//         branch: '',
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await axios.post("http://localhost:4000/students", formData);
//             alert("Data submitted successfully");
//             // Clear form data after successful submission
//             setFormData({
//                 name: '',
//                 rollno: '',
//                 college: '',
//                 branch: '',
//             });
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             alert("An error occurred while submitting data");
//         }
//     };

//     return (
//         <div>
//             <h1>Student Registration</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//                 <br />
//                 <br />
//                 <label>Roll No:</label>
//                 <input
//                     type="text"
//                     name="rollno"
//                     value={formData.rollno}
//                     onChange={(e) => setFormData({ ...formData, rollno: e.target.value })}
//                 />
//                 <br />
//                 <br />
//                 <label>College:</label>
//                 <input
//                     type="text"
//                     name="college"
//                     value={formData.college}
//                     onChange={(e) => setFormData({ ...formData, college: e.target.value })}
//                 />
//                 <br />
//                 <br />
//                 <label>Branch:</label>
//                 <input
//                     type="text"
//                     name="branch"
//                     value={formData.branch}
//                     onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
//                 />
//                 <br />
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//             <StudentList />
//         </div>
//     );
// };

// const StudentList = () => {
//     const [students, setStudents] = useState([]);

//     useEffect(() => {
//         const fetchStudents = async () => {
//             try {
//                 const response = await axios.get("http://localhost:4000/students");
//                 setStudents(response.data);
//             } catch (error) {
//                 console.error("Error fetching students:", error);
//                 // Handle error
//             }
//         };
//         fetchStudents();
//     }, []);

//     return (
//         <div>
//             <h2>Student List</h2>
//             <ul>
//                 {students.map((student) => (
//                     <li key={student._id}>
//                         Name: {student.name}, Roll No: {student.rollno}, College: {student.college}, Branch: {student.branch}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Register;
