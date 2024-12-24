import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {// outlet  is use to display the changing UI
  return <>
    <Header />
    <Outlet/> 
    <Footer/>
  </>
}

export default Layout