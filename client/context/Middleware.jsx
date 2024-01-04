import { Navigate,useLocation } from "react-router-dom";
import { UserContext } from "./index";
import React,{useContext, useState} from "react";

const Middleware =({children})=>{
    const [contextState,setState] = useContext(UserContext)
    const location = useLocation()
    if(!contextState){
        return <Navigate to='/login' state={{from:location}}/>
    }
    return children
}
export default Middleware