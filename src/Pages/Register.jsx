import React from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"
const Register = () => {



  const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(e.target[1].value)
      
  //const auth = getAuth();
      // if(e.target.name==='username'){
      //   const displayname = e.target.value;
      // }
      // if(e.target.name==='email'){
      //   const email = e.target.value;
      // }
      // if(e.target.name==='password'){
      //   const password = e.target.value;
      // }
      // if(e.target.name==='file'){
      //   const file = e.target.value;
      // }
      const displayname = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

     

      
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
        
   
  }
  return (
    <div className='form_container'>
    <form className='form' onSubmit={handleSubmit}>
        <div className='first_div'>
            <h1 className='app_name'>YECHAT</h1>
            <p className='title'>Register</p>
        </div>
        <div className='second_div' >
        <input type="text" placeholder='type your name'  autoComplete='off'/>
            <input  type="email" placeholder='enter yout email' autoComplete='off'/>
            <input  type="password" placeholder='password' autoComplete='off' />
            <input  style={{display:"none"}} className='register_file' type="file" id="avatar" />
            <label className='label_register' htmlFor="avatar">
                <img className='avatar_img' src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="avatar" srcSet=""  />
                <p>add avatar</p>
            </label>
                 <div className='third_div'>
                    <button className='register_button'>Sign up</button>
                     <p className='signin_tag'>Already have an account?<span >sign in</span></p>
                 </div>
        </div>
        </form>
    </div>
  )
}

export default Register