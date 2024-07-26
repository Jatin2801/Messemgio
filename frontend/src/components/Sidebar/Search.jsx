import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/UseConversation';
import useGetConversations from '../../hooks/UseGetConver'
import toast from 'react-hot-toast';

const Search = ()  => {
    const[search,setSearch] = useState("")
    const{setSelectedConversation} = useConversation()
    const{conversations } = useGetConversations() 

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!search) return
        if(search.length < 3){
            return toast.error('Give Atleast 3 characters')
        }
        const conver = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()))
        if(conver){
            setSelectedConversation(conver)
            setSearch('')
        }else{
            toast.error('No User Found')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='gap-2 flex mt-1 items-center'>
                <input type='text' placeholder='Search by name'
                value={search} onChange={(e)=>setSearch(e.target.value)} className='input bg-gray-300 text-gray-900 font-semibold placeholder-gray-800 ml-1 input-bordered rounded-full' />
                <button onClick={handleSubmit} type='submit' className='btn btn-circle border-none mr-1 mt-1 bg-sky-600 text-white'>
                 <IoSearchSharp className='w-6 h-6' />
                </button>
            </form>
        </div>
    )
}

export default Search