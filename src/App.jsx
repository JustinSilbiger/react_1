import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='border'>
        <Navbar />
        <Main />
        </div>
      </div>
    </>
  )
}

export default App
