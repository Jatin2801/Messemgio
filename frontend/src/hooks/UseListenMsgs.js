import { useSocketContext } from '../Context/SocketContext'
import useConversation from '../zustand/UseConversation.js'
import { useEffect } from 'react'
import notiSound from '../assets/noti.mp3'

const UseListenMsgs = () => {
const {socket}  = useSocketContext()    
const{messages,setMessages} = useConversation()
useEffect(()=>{
socket?.on("newMessage",(newMsg)=>{
    newMsg.shouldShake = true;
    const sound = new Audio(notiSound)
    sound.play()
    setMessages([...messages,newMsg])
})
return () => socket?.off("newMessage")
},[socket,messages,setMessages])
} 

export default UseListenMsgs