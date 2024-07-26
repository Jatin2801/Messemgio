import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar.jsx'
import MsgContainer from '../../components/Messages/MsgContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter 
    backdrop-blur-sm  backdrop-opacity-100 '>
      <Sidebar/>
      <MsgContainer/>
    </div>
  )
}

export default Home