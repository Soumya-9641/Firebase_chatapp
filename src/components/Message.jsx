import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
        <div className='messageinfo'>
            <img className='avatar' src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" alt="" />
            <span>just now</span>
        </div>
        <div className='messagecontent'>
            <p>hello bro</p>
            <img src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg" alt="" />
        </div>
    </div>
  )
}

export default Message





// import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { ChatContext } from "../Context/ChatContext";

// const Message = ({ message }) => {
//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);

//   const ref = useRef();

//   useEffect(() => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);

//   return (
//     <div
//       ref={ref}
//       className={`message ${message.senderId === currentUser.uid && "owner"}`}
//     >
//       <div className="messageInfo">
//         <img
//           src={
//             message.senderId === currentUser.uid
//               ? currentUser.photoURL
//               : data.user.photoURL
//           }
//           alt=""
//         />
//         <span>just now</span>
//       </div>
//       <div className="messageContent">
//         <p>{message.text}</p>
//         {message.img && <img src={message.img} alt="" />}
//       </div>
//     </div>
//   );
// };

// export default Message;