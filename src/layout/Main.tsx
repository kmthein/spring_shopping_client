import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default Main