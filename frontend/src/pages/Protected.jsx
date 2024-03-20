import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({Component}) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(()=>{
        if(!token){
            navigate("/signup")
        }
    },[])
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected

