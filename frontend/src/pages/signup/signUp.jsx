import React, { useState } from 'react'
import Genderbox from './Genderbox'
import { Link } from 'react-router-dom'
import UseSignup from '../../hooks/UseSignup'

const SignUp = () => {

  const [inputs, SetInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmpass: '',
    gender: ''
  }) // ini. values are empty

const {loading,signup} = UseSignup()

const handleSubmit = async (e) =>{
e.preventDefault();
await signup(inputs) // whenever we submit form we will paas our inputs to signup in UserSignup
}
  
const handleGender = (gender) => {
  SetInputs({...inputs,gender})
}

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  ' >
        <h1 className='text-3xl font-semibold text-center text-gray-600'>
          Sign Up <span className='text-blue-500'>Messegio</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-800' >Full Name</span>
            </label>
            <input type='text' placeholder='Enter Fullname' className='w-full input input-bordered h-10' value={inputs.fullname}
              onChange={(e) => SetInputs({ ...inputs, fullname: e.target.value })} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-800' >Username</span>
            </label>
            <input type='text' placeholder='Enter Username' value={inputs.username} className='w-full input input-bordered h-10' onChange={(e) => SetInputs({ ...inputs, username: e.target.value })} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-800' >Password</span>
            </label>
            <input type='password' placeholder='Enter Password' value={inputs.password} onChange={(e) => SetInputs({ ...inputs, password: e.target.value })} className='w-full input input-bordered h-10' />
            <label className='label p-2'>
              <span className='text-base label-text text-gray-800' >Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' value={inputs.confirmpass} onChange={(e) => SetInputs({ ...inputs, confirmpass: e.target.value })} className='w-full input input-bordered h-10' />
          </div>

          <Genderbox onCheckboxChange = {handleGender} selectedGender={inputs.gender} />

          <Link to='/' className='text-sm text-gray-800 hover:underline hover:text-blue-950 mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
            <button onClick={handleSubmit} className='btn btn-block text-gray-200 btn-sm mt-3 pr-10 btn-primary'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp