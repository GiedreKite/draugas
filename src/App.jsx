import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FirstPage } from './components/firstpage/FirstPage.jsx'
import {SecondPage} from './components/secondPage/SecondPage.jsx'
import { Header } from './components/header/Header.jsx'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header />
    <Routes>
      <Route name="app_draugas" path="/draugas">
        <Route name="main_pge" path="" element={<FirstPage/>}></Route>
        <Route name="second_pge" path="second" element={<SecondPage/>}></Route>
      </Route>
    </Routes>
  
    

    </>
  )
}

export default App
