import React from 'react'
import { MdVideoCall } from 'react-icons/md';
import {  IoIosAdd } from 'react-icons/io';
import {  AiOutlineMore } from 'react-icons/ai';


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
    </div>
  )
}

export default Chat


//MdVideoCall