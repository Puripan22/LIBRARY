import React, { useContext, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {UserContext} from "../../context/index"
function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [state,setState] = useContext(UserContext)
  const navigate = useNavigate()

  const handleClick = async(e)=>{
    try{
      e.preventDefault()
      const {data} = await axios.post('/login',{
        student_id:username,
        password,
      })
      if(data.error){
        alert(data.error)
      }else{
        setUsername('')
        setPassword('')
        setState(data)
        localStorage.setItem('auth',JSON.stringify(data))
        navigate('/')
      }
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="container flex items-center">
        <div className='flex flex-col md:w-1/2 md:mx-auto text-center'>
            <h1 className="pt-5 font-bold text-3xl">Login</h1>
            <p className="text-lg pb-4">
                Access your subscriptions. Anytime. Anywhere.
            </p>

            <div className='mb-4'>
                <label className='block text-sm font-semibold text-gray-600'>username</label>
                <input
                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-semibold text-gray-600'>Password</label>
                <input
                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="grid">
                <button
                    className='w-full px-4 py-2 font-semibold text-white bg-red-500 rounded-md focus:outline-none hover:bg-red-600'
                    onClick={handleClick}
                    type="button"
                >
                    Login
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Login