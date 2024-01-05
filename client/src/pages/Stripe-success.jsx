import React,{useEffect,useContext} from "react";
import axios from "axios";
import {SyncOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const StripeSuccess = ()=>{
    const navigate = useNavigate()
    const [state,setState] = useContext(UserContext)

    const getSubscriptionStatus = async()=>{
        const {data} = await axios.get("/subscription-status",{
            headers:{
                Authorization : `Bearer ${state.token}`
            }
        })
        console.log("SUbscription status =>",data);
        if(data && data.length === 0){
            navigate('/')
        }else{
            const auth = JSON.parse(localStorage.getItem("auth"))
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));
            setState(auth)
            setTimeout(()=>{
                navigate('/account')
            },1000)
        }
    }

    useEffect(()=>{
        if(state && state.token){
            getSubscriptionStatus();
            
        }
    },[state.token])
    return (
        <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex align-items-center">
        <SyncOutlined spin style={{ fontSize: "50px" }} />
      </div>
    </div>
    )
}
export default StripeSuccess