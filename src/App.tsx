import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './layouts/e-commerce/Header'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header/>}/>
    </Routes>
  )
}

export default App
