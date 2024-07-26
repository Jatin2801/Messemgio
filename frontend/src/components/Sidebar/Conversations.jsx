import React, { useEffect } from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/UseGetConver'


const Conversations = () => {
const{conversations } = useGetConversations()
// console.log("CONVERSATIONS:" , conversations)
  return (
    <div className='py-2 flex flex-col scroll-smooth  overflow-scroll '>
      {conversations && conversations.length > 0 ? (
        conversations.map((conversation , idx) => (
          <Conversation key={conversation._id} conversation={conversation} lastIdx={idx === conversations.length - 1}/> // this is props 
        ))
      ) : (
        <p className='text-black'>No conversations available</p>
      )}             
    </div>
  )
}

export default Conversations 