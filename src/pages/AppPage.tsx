import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import BodyHome from '../components/main/BodyHome'
import ShoesContainer from '../components/shoes/ShoesContainer'
import MainLayout from '../layouts/MainLayout'

function AppPage() {
  return (
    <>
      <MainLayout>
        <BodyHome>
          <ShoesContainer/>
        </BodyHome>
      </MainLayout>
    </>

  )
}

export default AppPage