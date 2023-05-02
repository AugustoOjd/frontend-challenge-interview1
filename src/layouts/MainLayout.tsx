import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

interface Props {
    children: React.ReactNode
}

function MainLayout({children}:Props) {
  return (
    <>
    <Navbar/>
        {children}
    <Footer/>
    </>

  )
}

export default MainLayout