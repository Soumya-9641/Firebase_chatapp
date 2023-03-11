import React from 'react'
import Chats from './Chats'
const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
          <input type="text" placeholder='search a user' />
      </div>
      {/* <div className='userChat'>
          <img src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" alt="" />
          <div className='userInfo'>
              <span>soumya</span>
          </div>
      </div> */}
      <Chats/>
      <Chats/>
      <Chats/>
    </div>
  )
}

export default 
Search