import React from 'react'
import NavbarAdmin from './navbar/NavbarAdmin'
import Footer from './footer/Footer'

interface Props {
    children: React.ReactNode
}

function AdminLaylout ({children}:Props) {
  return (
    <>
    <NavbarAdmin/>
    {children}
    <Footer/>
    </>
  )
}

export default AdminLaylout