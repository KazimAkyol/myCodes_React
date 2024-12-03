import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "../components/Navbar"
import Main from '../pages/Main'

const AppRouter = () => {
  return (
    <BrowserRouter>
<Navbar/>

<Routes>
    <Route path="/" element={<Main/>} />
    <Route path='/' element={} />
    <Route path='' element={} />
    <Route path='' element={} />
    <Route path='' element={} />
    <Route path='' element={} />
</Routes>
    </BrowserRouter>
  )
}

export default AppRouter