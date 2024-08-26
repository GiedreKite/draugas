import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FirstPage } from './components/firstpage/FirstPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstPage />
    </>
  )
}

export default App
