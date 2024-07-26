import { useEffect, useState } from "react"
import useConversation from "../zustand/UseConversation"
import toast from "react-hot-toast"

const UseGetMsgs = () => {
    const [loading, setLoading] = useState(false)
    const { selectedConversation, messages, setMessages } = useConversation()
    useEffect(() => {
        const getMsgs = async () => {
            setLoading(true)
            try {
                const userdata = JSON.parse(localStorage.getItem("chat-user"))
                const userId = userdata._id
                
                const res = await fetch(`/api/msg/${selectedConversation._id}`, {
                    method: "GET",
                    headers: {
                        'user-id': userId,
                    }
                })
            const data = await res.json()
            if(data.error) throw new Error(data.error)

            setMessages(data)    

            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        if(selectedConversation?._id) getMsgs() // this will run only if selectedConver. is present 
    }, [selectedConversation?._id,setMessages]) // whenever selected id changes run 
return{messages,loading}
}

export default UseGetMsgs