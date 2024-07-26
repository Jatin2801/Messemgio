import {create} from 'zustand'

const useConversation = create((set) => ({
    selectedConversation : null, // ini. value
    setSelectedConversation : (selectedConversation) => set({selectedConversation}), 
    messages:[],
    setMessages : (messages) => set({messages}) // messages is argu. here 
}))

export default useConversation;