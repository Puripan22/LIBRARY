import React, { useContext, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {UserContext} from "../../context/index"
import '../css/login.css'
import image01 from "../../image/admin01.jpg"
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
    <div className="login-container">
    
        <div className='left-login'>
          <div className="text-image-login">
          </div>
          <img src={image01} className='login01-img' ></img>
        </div>
        <div className='right-login'>
            <h1 className="head-login">Login</h1>
            <p className="text01-login">
                Access your subscriptions. Anytime. Anywhere.
            </p>

            <div className='mb-4'>
                
                <input
                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                    type="text"
                    value={username}
                    placeholder='username'
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className='mb-4'>
                
                <input
                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                    type="password"
                    value={password}
                    placeholder='password'
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

  )
}

export default Login