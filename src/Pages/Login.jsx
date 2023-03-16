import React,{useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.js"
import { useNavigate,Link } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
  const [errmsg, setErrmsg] = useState(false)
  const handleClick=(e)=>{
    e.preventDefault();
    const user =signInWithEmailAndPassword(auth,email,password).then((auth)=>{
      console.log(user.user);
       if(auth){
        navigate("/home");
        console.log(auth.user.email)
        alert("succesful")
        
      
       }
       //console.log(auth);
    })
    .catch(error=>{
      alert(error.message)
      setErrmsg(true)
    }
      
    );
  }
  return (
    <div className='form_container'>
    <form className='form'>
        <div className='first_div'>
            <h1 className='app_name'>YECHAT</h1>
            <p className='title'>Login</p>
        </div>
        <div className='second_div'>
           
            <input onChange={(e)=>{
              setEmail(e.target.value)
            }} type="email" placeholder='enter yout email' autoComplete='off'/>
            <input onChange={(e)=>{
             setPassword(e.target.value)
            }}
             type="password" placeholder='password' autoComplete='off' />
            
                 <div className='third_div'>
                 {/* <p>{errmsg}</p> */}
                    <button onClick={handleClick} className='register_button'>Sign in</button>
                    {errmsg && <span>Something wnet wrong</span>}
                    <Link to='/'>
                    <p className='signin_tag'> have not an account?<span>sign up</span></p>
                    </Link>
                    
                 </div>
        </div>
        </form>
    </div>
  )
}

export default Login