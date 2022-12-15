import React from 'react'
import { AuthProvider } from '../../../Auth/AuthProvider'
import MasterPage from '../MasterPage'

const Home = () => {
  return (
    <AuthProvider>
        <MasterPage>
            <></>
        </MasterPage>
    </AuthProvider>
  )
}

export default Home