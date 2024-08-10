import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/Login'

function App() {

  return (
    <>
      {/* <Home/> */}
      <p>**Nota: Aún no se ha realizado una clase relacionada con la navegación en la página o el guardar la información ingresada en un formulario, por lo que estos formularios no son funcionales de momento.
</p>
      <Register/>
      <Login/>
    </>
  )
}

export default App
