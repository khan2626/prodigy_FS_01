import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = ()=>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const resp = await axios.post('http://localhost:8001/api/signup', {name, email, password})
            if (resp.data.message.includes("successful")){
                alert(resp.data.message)
                navigate("/login")
                setName("")
                setEmail("")
                setPassword("")
            }
            alert(resp.data.message)
            
        } catch (error) {
            console.log("signup error: ", error)
        }
    }

    return(
        <div className="flex items-center justify-center min-h-screen">
            
            <div className="border px-4 py-5 rounded-2xl text-center">
            <h1 className="text-2xl font-bold mb-2">Signup</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input onChange={(e)=> setName(e.target.value)} value={name}  className="px-4 py-2 border rounded-lg" type="text" placeholder="fullname" required  />
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} className="px-4 py-2 border rounded-lg" type="email" placeholder="email" required />
                    <input onChange={(e)=> setPassword(e.target.value)}  value={password} className="px-4 py-2 border rounded-lg" type="password" placeholder="password" required />
                    <button type="submit" className="text-white px-6 py-2 mt-2 border border-blue-700 bg-blue-700 rounded-lg hover:bg-blue-600 transition">signup</button>
                    <p>Already have an account? <Link to={"/login"} className='font-bold'>Sign in</Link></p>
                </form>
                
            </div>
        </div>
    )
}

export default Signup