import React,{useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.js"
import { useNavigate,Link } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
//  const [email, setEmail] = useState("")
//  const [password, setPassword] = useState("")
  const [errmsg, setErrmsg] = useState(false)
  const handleClick=async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    
      try{
        await signInWithEmailAndPassword(auth,email,password)
        navigate("/")

      }catch(err){
        setErrmsg(true)
        console.log(err)
      }
       //console.log(auth);
   
    
      
    
  }
  return (
    <div className='form_container'>
    <form onSubmit={handleClick} className='form'>
        <div className='first_div'>
            <h1 className='app_name'>YECHAT</h1>
            <p className='title'>Login</p>
        </div>
        <div className='second_div'>
           
            <input  type="email" placeholder='enter yout email' autoComplete='off'/>
            <input 
             type="password" placeholder='password' autoComplete='off' />
            
                 <div className='third_div'>
                 {/* <p>{errmsg}</p> */}
                    <button  className='register_button'>Sign in</button>
                    {errmsg && <span>Something wnet wrong</span>}
                    <Link to='/register'>
                    <p className='signin_tag'> have not an account?<span>sign up</span></p>
                    </Link>
                    
                 </div>
        </div>
        </form>
    </div>
  )
}

export default Login











// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// const Login = () => {
//   const [err, setErr] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/")
//     } catch (err) {
//       setErr(true);
//     }
//   };
//   return (
//     <div className="formContainer">
//       <div className="formWrapper">
//         <span className="logo">Lama Chat</span>
//         <span className="title">Login</span>
//         <form onSubmit={handleSubmit}>
//           <input type="email" placeholder="email" />
//           <input type="password" placeholder="password" />
//           <button>Sign in</button>
//           {err && <span>Something went wrong</span>}
//         </form>
//         <p>You don't have an account? <Link to="/register">Register</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Login;