import { useState } from 'react'
import './App.css'
import LoginPage from './pages/Loginpage'
import RegisterPage from './pages/RegisterPage'

function App() {
    const [isRegistered, setIsRegister] = useState(false)
  return (
    <>
    {isRegistered ? (<LoginPage />) : (<RegisterPage setIsRegister={setIsRegister} />)}
      {/* <RegisterPage />
      <Loginpage /> */}
    </>
  )
}

export default App