
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Other URLs */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
