
import "./style.scss"
import Register from './Pages/Register';
import {  Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
function App() {
  return (
    <>
       <div className="main_container">
       <Routes>
        <Route  exact path="/" element={<><Register/></>} />
        <Route  path="/login" element={<><Login/></>} />
        <Route  path="/home" element={<><Home/></>} />
       </Routes>
         
         {/* <Login/> */}
         {/* <Home/> */}
        </div>
   
    </>
   
      
   
  );
}

export default App;
