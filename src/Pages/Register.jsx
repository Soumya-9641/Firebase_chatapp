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
   const name = e.target[0].value;
   //console.log(name);
   const email = e.target[1].value;
   const password = e.target[2].value;
   const file = e.target[3].files[0]
   //console.log(file)
    try{
      await createUserWithEmailAndPassword(auth, email, password).then((auth)=>{
        // console.log(user.user); 
         if(auth){
           alert("successfully sign up")
           console.log(auth.user);
           
         // console.log(userprofile)
           navigate("/login")
           //console.log(email,password);
         }
         console.log(auth.user.uid)
         const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(

            (error) => {
              // Handle unsuccessful uploads
              setErrmsg(true);
              console.log(error)
            }, 
            () => {
              
              getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                console.log('File available at', downloadURL);
                console.log(auth.user.uid)
                await updateProfile(auth.user,{
                  displayName:name,
                  photoURL:downloadURL
                })
                await setDoc(doc(db, "users", auth.user.uid), {
                 uid:auth.user.uid,
                 displayName:name,
                 email,
                 imageURL:downloadURL
                });
                   });
                            }
                          );
       })
       
        
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



// e.preventDefault();
// const user=  createUserWithEmailAndPassword(auth,email,password).then((auth)=>{
//    console.log(user.user); 
// if(auth){
// navigate("/");
//   }
//   console.log(auth,email,password);
 
//   })
//   .catch(error=>alert(error.message));