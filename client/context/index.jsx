import React from "react";
import { useState,useEffect,createContext } from "react";
import axios from 'axios';

const UserContext = createContext()

const UserProvider = ({children})=>{
    
    const [state,setState] = useState({
        user:{},
        token:""
    })

    const [openModal,setOpenModal] = useState(false)

    useEffect(()=>{
        setState(JSON.parse(localStorage.getItem('auth')))
    },[])

    const [rating,setRating] = useState(0)

    const token = state && state.token ? state.token:"";
    axios.defaults.baseURL = "http://localhost:8080/api"
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    return (
        <UserContext.Provider value={{state,setState,openModal,setOpenModal,rating,setRating}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}