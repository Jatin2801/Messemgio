import React, { useEffect, useRef } from 'react'
import SingleMsg from './SingleMsg'
import UseGetMsgs from '../../hooks/UseGetMsgs'
import UseListenMsgs from '../../hooks/UseListenMsgs'

const Messages = () => {
  const{loading,messages} = UseGetMsgs()
 UseListenMsgs() //this will listen for new msgs 
 let lastMsgRef = useRef()
  
  useEffect(()=>{
setTimeout(() => {
  lastMsgRef.current?.scrollIntoView({behavior : "smooth"})
}, 100);
  },[messages])

  return (
    <div className='overflow-auto px-4 flex-1'>

      {!loading && messages.length > 0 && messages.map((message)=>(
        <div key={message._id} ref={lastMsgRef}>
           <SingleMsg  message={message}/> // props used here 
           </div>
      ))}

      {loading && <div><div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
 <div className="flex w-52 flex-col gap-4">
 <div className="skeleton h-32 w-full"></div>
 <div className="skeleton h-4 w-28"></div>
 <div className="skeleton h-4 w-full"></div>
 <div className="skeleton h-4 w-full"></div>
</div></div>
}

{!loading && messages.length===0 && (
				<p className='text-center text-black font-semibold text-lg'>Send a message to start the conversation</p>
			)}
    </div>
  )
}

export default Messages