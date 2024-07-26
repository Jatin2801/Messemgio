import React from 'react'
import useConversation from '../../zustand/UseConversation'
import { extractTime } from '../../utils/extractTime'

const SingleMsg = ({message}) => {
  const userdata = JSON.parse(localStorage.getItem("chat-user")) 
  const{selectedConversation} = useConversation()
  const fromMe = message.senderId == userdata._id
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ?  'chat-end' : 'chat-start'
  const profilePic = fromMe ? userdata.profilepic : selectedConversation?.profilepic
  const bubbleBgColor = fromMe ? 'bg-blue-500' : ""
  const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chatClassName}`}>
       <div className='chat-image avatar w-10 rounded-full'>
        <img src= {profilePic} />
       </div>
       <div className={`chat-bubble text-white  ${bubbleBgColor} ${shakeClass} `}> {message.message}  </div>
       <div className='chat-footer text-black font-bold opacity-50 text-xs flex gap-1 items-center '>{formattedTime}</div>
    </div>
  )
}

export default SingleMsg