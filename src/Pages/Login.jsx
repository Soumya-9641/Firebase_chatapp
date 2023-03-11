import React from 'react'

const Login = () => {
  return (
    <div className='form_container'>
    <form className='form'>
        <div className='first_div'>
            <h1 className='app_name'>YECHAT</h1>
            <p className='title'>Login</p>
        </div>
        <div className='second_div'>
           
            <input type="email" placeholder='enter yout email' autoComplete='off'/>
            <input type="password" placeholder='password' autoComplete='off' />
            
                 <div className='third_div'>
                    <button className='register_button'>Sign up</button>
                     <p className='signin_tag'> have not an account?<span>sign up</span></p>
                 </div>
        </div>
        </form>
    </div>
  )
}

export default Login