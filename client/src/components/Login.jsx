import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log({ email, password})
        setEmail("")
        setPassword("")
    }

    return(
        <div className="flex items-center justify-center min-h-screen">
            
            <div className=" border px-4 py-5 rounded-2xl  text-center">
            <h1 className="text-2xl font-bold mb-2">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} className="px-4 py-2 border rounded-lg" type="email" placeholder="email" required />
                    <input onChange={(e)=> setPassword(e.target.value)}  value={password} className="px-4 py-2 border rounded-lg" type="password" placeholder="password" required />
                    <button type="submit" className="text-white cursor-pointer px-6 py-2 mt-2 border border-blue-700 bg-blue-700 rounded-lg hover:bg-blue-600 transition">Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className='font-bold'>Signup</Link></p>
                </form>
                
            </div>
        </div>
    )
}

export default Login