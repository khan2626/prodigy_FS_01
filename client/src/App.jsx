import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
