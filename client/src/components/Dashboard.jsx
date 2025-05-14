import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = ()=>{

    const [me, setMe] = useState("")
    const navigate = useNavigate()


    const handleLogout = async (e)=>{
        e.preventDefault()
        const resp = await axios.post('http://localhost:8001/api/logout')
            alert(resp.data.message)
            navigate("/login")
    }

    useEffect(()=>{
        const fetchData = async()=>{
            const resp = await axios.get('http://localhost:8001/api/dashboard')
            setMe(resp.data.message)
        }
        fetchData()
    },[])

    return(
        <div className='flex flex-col justify-center items-center min-h-screen gap-2.5 '>
            <p className="py-4 px-6 bg-amber-400">{me}</p>
            
            <button onClick={handleLogout} className='border rounded-lg px-2 py-2 bg-red-600 text-white'>Logout</button>
        </div>
    )
}

export default Dashboard