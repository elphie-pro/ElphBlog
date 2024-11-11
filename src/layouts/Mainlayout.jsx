import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Mainlayout = () => {
  return (
    <>
    <Outlet />
    <ToastContainer theme='colored'/>
    </>
  )
}

export default Mainlayout
