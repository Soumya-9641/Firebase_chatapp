
import "./style.scss"
import Register from './Pages/Register';
import {BrowserRouter,  Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
function App() {
  return (
    <>
    <BrowserRouter>
       <div className="main_container">
       <Routes>
        <Route  exact path="/" element={<><Register/></>} />
        <Route  path="/login" element={<><Login/></>} />
        <Route  path="/home" element={<><Home/></>} />
       </Routes>
         
         {/* <Login/> */}
         {/* <Home/> */}
        </div>
        </BrowserRouter>
   
    </>
   
      
   
  );
}

export default App;
