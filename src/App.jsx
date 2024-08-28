import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FirstPage } from './components/firstpage/FirstPage.jsx'
import {SecondPage} from './components/secondPage/SecondPage.jsx'
import { Header } from './components/header/Header.jsx'
import {
  BrowserRouter as Router, Routes, Route, Switch
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header />
    <Switch>
      <Route exact path="/" Component={FirstPage}></Route>
      <Route exact path="/second" Component={SecondPage}></Route>
    </Switch>
  
    

    </>
  )
}

export default App
