import React from 'react'
import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
import axios from 'axios'
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  axios.defaults.baseURL = "http://localhost:3001";
  return (
    
    <Router>
    <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
