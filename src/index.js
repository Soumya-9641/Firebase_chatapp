import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
//import { AuthContextProvider } from './Context/authContext';
 import { AuthContextProvider } from './Context/AuthContext';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';
//import { AuthContextProvider } from './Context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <AuthContextProvider>
  {/* The rest of your app goes here */}
        <React.StrictMode>
             <App /> 
        </React.StrictMode>
                
        
  </AuthContextProvider>
  
);




// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { AuthContextProvider } from "./Context/AuthContext";
// import { ChatContextProvider } from "./Context/ChatContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <AuthContextProvider>
//     <ChatContextProvider>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </ChatContextProvider>
//   </AuthContextProvider>
// );