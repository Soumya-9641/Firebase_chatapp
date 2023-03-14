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