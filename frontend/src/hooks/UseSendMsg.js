import useConversation from "../zustand/UseConversation"
import toast from 'react-hot-toast'

const UseSendMsg = () => {
 const { messages , setMessages , selectedConversation } = useConversation()
const sendMsg = async (message) => {
try {
    const userdata = JSON.parse(localStorage.getItem("chat-user"))
    const uderId = userdata._id
    const res = await fetch(`/api/msg/send/${selectedConversation._id}`,{
        method : "POST",
        headers : {
            'Content-type' : 'application/json',
            'user-id': uderId,
        },
        body : JSON.stringify({message})
    })
    const data = await res.json()
    if(data.error){
        throw new Error(data.error)
    }
    setMessages([...messages,data])
} catch (error) {
 toast.error(error.message)   
}
 }
 return {sendMsg}
}

export default UseSendMsg