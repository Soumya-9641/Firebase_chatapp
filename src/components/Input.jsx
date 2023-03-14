import React from 'react'
import { AiFillFileAdd } from 'react-icons/ai';
import { FcAddImage } from 'react-icons/fc';
import { IoMdSend } from 'react-icons/io';
const Input = () => {
  return (
    <div className='input'>
      
      <input className='input_tag' type="text" placeholder='type here' />
 
      
      <div className='icons'>
          <AiFillFileAdd className='fileicon'/>
          <FcAddImage className='imageicon'/>
          <IoMdSend className='sendicon'/>
      </div>
    </div>
  )
}

export default Input


//AiFillFileAdd
//FcAddImage
//IoMdSend