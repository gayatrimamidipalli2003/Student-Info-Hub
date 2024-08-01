import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/common/Header';
// import Login from './pages/Login/Login';
import Register from './pages/register/register';
// import Admindashboard from './pages/Admindashboard/Admindashboard';
// import Studentdashboard from './pages/Studentdashboard/Studentdashboard';
function App() {
  return (
    <div className="App">
       {/* <ToastContainer /> */}
     {/* <Header/> */}
     <Routes>
      {/* <Route path='/' element={<Login/>} />
      <Route path='/login' element={<Login/>} /> */}
      <Route path='/' element={<Register/>}/>
      {/* <Route path='/studentdashboard' element={<Studentdashboard/>} />
      <Route path='/admindashboard' element={<Admindashboard/>}/> */}
     </Routes>
    </div>
  );
}

export default App;























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
