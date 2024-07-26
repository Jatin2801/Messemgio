import React from 'react'
import useConversation from '../../zustand/UseConversation.js'
import { useSocketContext } from '../../Context/SocketContext.jsx'

const Conversation = ({conversation , lastIdx}) => {
  const {selectedConversation , setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id //if slected id = to current id it is true 
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
 
  console.log(isOnline)

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
      ${isSelected?"bg-sky-500 ":""}`}
      onClick={()=> setSelectedConversation(conversation)}
      >
    <div className={`avatar ${isOnline ? "online" : ""}`}>
    <div className='w-12 rounded-full'>
        <img src= {conversation.profilepic} />
    </div>
    </div>
    <div className='flex flex-col flex-1'>
        <div className='flex gap-2 justify-between'>
            <p className='font-bold text-gray-800'>{conversation.fullname}</p>
        </div>
    </div>
    
    </div>
    {!lastIdx &&  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500"/>}
       
    </>
  )
}

export default Conversation