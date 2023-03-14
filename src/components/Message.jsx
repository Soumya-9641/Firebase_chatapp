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