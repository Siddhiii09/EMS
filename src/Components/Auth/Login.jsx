import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler =(e) =>{
    e.preventDefault()
    // console.log("Email:", email)
    // console.log('Password:', password)
    handleLogin(email, password)
    setEmail('')
    setPassword('')
    
  }
  return (
    <div className='flex items-center justify-center w-full h-screen bg-zinc-900'>
      <div className='bg-zinc-800 p-8 rounded-lg shadow-lg w-96 h-3/5'>
        <form
          onSubmit={(e) =>{
            submitHandler(e)
          }} 
          className='flex flex-col justify-center items-center mt-10 gap-10'>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required 
              className='text-white  outline-none bg-transparent border-2 border-zinc-900 text-xl rounded-sm p-4 placeholder:text-gray-300'
              type='text'
              placeholder='Enter your email' />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }} 
              required
              className='text-white outline-none bg-transparent border-2 border-zinc-900 text-xl rounded-sm p-4 placeholder:text-gray-300'
              type='password'
              placeholder='Enter your password' />
            <button className='bg-zinc-100 text-zinc-900 px-4 py-3 rounded-lg mt-5'>
              Login
            </button>     
        </form>
      </div>
    </div>
  )
}

export default Login