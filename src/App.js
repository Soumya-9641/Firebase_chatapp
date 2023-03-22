
import "./style.scss"
import Register from './Pages/Register';
import {BrowserRouter,  Navigate,  Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
function App() {
   const {currentsUser} = useContext(AuthContext);
  console.log(currentsUser)
  const ProtectedRoute =({children})=>{
    if(!currentsUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  return (
    <>
    <BrowserRouter>
       <div className="main_container">
       <Routes>
       <Route path="/">
       <Route  index element={
          <ProtectedRoute>
             <Home/>
          </ProtectedRoute>
        } />
        <Route   path="register" element={<><Register/></>} />
        <Route  path="login" element={<><Login/></>} />
        
        </Route>
       </Routes>
         
         {/* <Login/> */}
         {/* <Home/> */}
        </div>
        </BrowserRouter>
   
    </>
   
      
   
  );
}

export default App;










// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import "./style.scss";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./Context/AuthContext";

// function App() {
//   const { currentUser } = useContext(AuthContext);

//   const ProtectedRoute = ({ children }) => {
//     if (!currentUser) {
//       return <Navigate to="/login" />;
//     }

//     return children
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/">
//           <Route
//             index
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;