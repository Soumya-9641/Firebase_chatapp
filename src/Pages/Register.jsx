import React,{useState} from 'react'
import {getAuth,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app ,{storage,db} from "../firebase.js"
import { Link,useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
//import {  collection, addDoc } from "firebase/firestore";
//const dbRef = collection(db, "users");

const Register = () => {
 
  const navigate = useNavigate();
      const auth = getAuth(app);

const [errmsg, setErrmsg] = useState(false)
  const onSubmit=async (e)=>{
    e.preventDefault();
   const displayName = e.target[0].value;
   //console.log(name);
   const email = e.target[1].value;
   const password = e.target[2].value;
   const file = e.target[3].files[0]
   //console.log(file)
    try{
      await createUserWithEmailAndPassword(auth, email, password).then(()=>{

        const date = new Date().getTime();
        console.log(auth.user.uid)
        const storageRef = ref(storage, `${displayName + date}`);
        uploadBytesResumable(storageRef, file).then(()=>{
         getDownloadURL(storageRef).then(async(downloadURL)=>{
           try{
             //update profile
             await updateProfile(auth.user,{
               displayName:displayName,
               photoURL:downloadURL
             })  
             //create user om firebase
             await setDoc(doc(db, "users", auth.user.uid), {
               uid:auth.user.uid,
               displayName:displayName,
               email,
               photoURL:downloadURL
              });
              //create empty user chat on firestore
              await setDoc(doc(db,"usersChat",auth.user.uid),{})
              navigate("/")
           }catch(err){
             console.log(err);
            setErrmsg(true);
           // setLoading(false);
           }
         })

       });

      }).catch((err)=>{
        console.log(err)
      })

      ;
        // console.log(user.user); 
        //  if(auth){
        //    alert("successfully sign up")
        //    console.log(auth.user);
           
        //  // console.log(userprofile)
        //   // navigate("/login")
        //    //console.log(email,password);
        //  }
      
        // uploadTask.on(

        //     (error) => {
        //       // Handle unsuccessful uploads
        //       setErrmsg(true);
        //       console.log(error)
        //     }, 
        //     () => {
              
              // getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
              //   console.log('File available at', downloadURL);
              //   console.log(auth.user.uid)
              //   await updateProfile(auth.user,{
              //     displayName:name,
              //     photoURL:downloadURL
              //   })  
              //   await setDoc(doc(db, "users", auth.user.uid), {
              //    uid:auth.user.uid,
              //    displayName:name,
              //    email,
              //    photoURL:downloadURL
              //   });
              //   await setDoc(doc(db,"usersChat",auth.user.uid),{})
              //   navigate("/")
              //      });
              //               }
              //             );
       
       
        
    }catch(err){
        alert(err.message);
        console.log(err);
    }
   
  }

  return (
    <div className='form_container'>
    <form onSubmit={onSubmit} className='form'>
        <div className='first_div'>
            <h1 className='app_name'>YECHAT</h1>
            <p className='title'>Register</p>
        </div>
        <div className='second_div' >
            <input  type="text" placeholder='type your name'  autoComplete='off'/>
            <input type={"email"} placeholder='enter yout email' autoComplete='off'/>
            <input  type={"password"} placeholder='password' autoComplete='off' />
            <input   name='image' style={{display:"none"}} className='register_file' type="file" id="file" />
            <label htmlFor="file" className='label_register'>
                <img className='avatar_img' src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="avatar" srcSet=""  />
                <p>add avatar</p>
            </label>
                 <div className='third_div'>
                    <button  className='register_button'>Sign up</button>
                    {errmsg && <span>Something went wrong</span>}
                    <Link to="/login">
                        <p className='signin_tag'>Already have an account?<span >sign in</span></p>
                    </Link>
                     
                 </div>
        </div>
        </form>
    </div>
  )
}

export default Register









// import React, { useState } from "react";
// //import Add from "../img/addAvatar.png";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {
//   const [err, setErr] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//     try {
//       //Create user
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       //Create a unique image name
//       const date = new Date().getTime();
//       const storageRef = ref(storage, `${displayName + date}`);

//       await uploadBytesResumable(storageRef, file).then(() => {
//         getDownloadURL(storageRef).then(async (downloadURL) => {
//           try {
//             //Update profile
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });
//             //create user on firestore
//             await setDoc(doc(db, "users", res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });

//             //create empty user chats on firestore
//             await setDoc(doc(db, "userChats", res.user.uid), {});
//             navigate("/");
//           } catch (err) {
//             console.log(err);
//             setErr(true);
//             setLoading(false);
//           }
//         });
//       });
//     } catch (err) {
//       setErr(true);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="formContainer">
//       <div className="formWrapper">
//         <span className="logo">Lama Chat</span>
//         <span className="title">Register</span>
//         <form onSubmit={handleSubmit}>
//           <input required type="text" placeholder="display name" />
//           <input required type="email" placeholder="email" />
//           <input required type="password" placeholder="password" />
//           <input required style={{ display: "none" }} type="file" id="file" />
//           <label htmlFor="file">
//             <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" />
//             <span>Add an avatar</span>
//           </label>
//           <button disabled={loading}>Sign up</button>
//           {loading && "Uploading and compressing the image please wait..."}
//           {err && <span>Something went wrong</span>}
//         </form>
//         <p>
//           You do have an account? <Link to="/register">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;