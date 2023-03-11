import React from 'react'

const Register = () => {
  return (
    <div className='form_container'>
    <form className='form'>
        <div className='first_div'>
            <h1 className='app_name'>YECHAT</h1>
            <p className='title'>Register</p>
        </div>
        <div className='second_div'>
            <input type="text" placeholder='type your name'  autoComplete='off'/>
            <input type="email" placeholder='enter yout email' autoComplete='off'/>
            <input type="password" placeholder='password' autoComplete='off' />
            <input style={{display:"none"}} className='register_file' type="file" id="avatar" />
            <label className='label_register' htmlFor="avatar">
                <img className='avatar_img' src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="avatar" srcset=""  />
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