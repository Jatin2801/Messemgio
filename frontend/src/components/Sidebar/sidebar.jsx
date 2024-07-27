import React from 'react'
import Search from './Search'
import Conversations from './Conversations'
import { RiLogoutBoxLine } from "react-icons/ri";
import UseLogout from '../../hooks/UseLogout';


const Sidebar = () => {
const {logout} = UseLogout();
const handleLogout = async (e)=>{
e.preventDefault()  
await logout();
}
  return (
    <div className='border-r border-slate-600 p-4 flex flex-col'>
        <Search/>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      
        <Conversations/> 
        <div className='mt-auto'>
      <RiLogoutBoxLine className='w-6 h-6 text-black cursor-pointer' onClick={handleLogout} />
      <p className='text-black font-semibold'>Logout</p>
        </div>
    </div>
  )
}

export default Sidebar