import React from 'react'
import MainLayout from '../layouts/MainLayout'
import BodyHome from '../components/main/BodyHome'
import LoginContainer from '../components/login/LoginContainer'

function LoginPage() {
  return (
    <>
        <MainLayout>
            <BodyHome>
              <LoginContainer/>
            </BodyHome>
        </MainLayout>
    </>
  )
}

export default LoginPage