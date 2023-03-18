import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const auth = getAuth();

  const handleClick =async ()=>{

    await signOut(auth).then(() => {
      // Sign-out successful.
      console.log("sign out successful")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });

  }
  return (
    <div className='navbar'>
      <span className='logo'>YECHAT</span>
      <div className='user'>
        <img src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" alt="" srcSet="" />
        <span>soumya</span>
        <button onClick={handleClick}>Logout</button>
      </div>
    </div>
  )
}

export default 
Navbar

// import React, { useContext } from 'react'
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'
// import { AuthContext } from '../Context/AuthContext'

// const Navbar = () => {
//   const {currentUser} = useContext(AuthContext)

//   return (
//     <div className='navbar'>
//       <span className="logo">Lama Chat</span>
//       <div className="user">
//         <img src={currentUser.photoURL} alt="" />
//         <span>{currentUser.displayName}</span>
//         <button onClick={()=>signOut(auth)}>logout</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar