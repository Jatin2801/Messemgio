import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import UseSendMsg from '../../hooks/UseSendMsg';

const MsgInput = () => {
const[message , setMessage] = useState('')
const {sendMsg} = UseSendMsg()
const handleSubmit = async (e) => {
  e.preventDefault()
if(!message) return // if msg is empty dont run
await sendMsg(message)
setMessage('')
}
  return (
    
        <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
        <input type="text" placeholder="Type here" className="input placeholder-gray-900 input-bordered font-semibold  bg-white
         text-black w-full max-w-xs"
         value={message} onChange={(e) => setMessage(e.target.value)}
         />
        <button onClick={handleSubmit} type='submit' className='text-black absolute inset-y-0 end-0 mr-8 items-center flex pe-3 text-2xl'> <IoSendSharp/></button>
        </div>
        </form>
   
  )
}

export default MsgInput