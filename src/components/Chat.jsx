import React from 'react'
import { MdVideoCall } from 'react-icons/md';
import {  IoIosAdd } from 'react-icons/io';
import {  AiOutlineMore } from 'react-icons/ai';
import Messages from './Messages';
import Input from "./Input"
const Chat = () => {
  return (
    <div className='chatbar'>
         <div className='chatInfo'>
          <span>soumya</span>
          <div className='chatIcons'>
              <MdVideoCall className='videocall'/>
              <IoIosAdd className='addpeople'/>
              <AiOutlineMore className='more'/>
          </div>
        
         </div>
         <Messages/>
         <Input/>
    </div>
  )
}

export default Chat


//MdVideoCall




// import React, { useContext } from "react";
// // import Cam from "../img/cam.png";
// // import Add from "../img/add.png";
// // import More from "../img/more.png";
// import Messages from "./Messages";
// import Input from "./Input";
// import { ChatContext } from "../Context/ChatContext";

// const Chat = () => {
//   const { data } = useContext(ChatContext);

//   return (
//     <div className="chat">
//       <div className="chatInfo">
//         <span>{data.user?.displayName}</span>
//         <div className="chatIcons">
//           {/* <img src={Cam} alt="" />
//           <img src={Add} alt="" />
//           <img src={More} alt="" /> */}
//           <MdVideoCall className='videocall'/>
//                <IoIosAdd className='addpeople'/>
//               <AiOutlineMore className='more'/>
//         </div>
//       </div>
//       <Messages />
//       <Input/>
//     </div>
//   );
// };

// export default Chat;