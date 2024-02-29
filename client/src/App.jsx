import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development'
import ParentContext from './context/ParentContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}></Route>
        {/* <Route path='/signup' element={<Signup />}></Route> */}
        {/* <Route path='/login' element={<Login/>}></Route> */}
      </Routes>
      <ParentContext />
      <Footer/>
    </>
  )
}

export default App
