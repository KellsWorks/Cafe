import './App.css'
import { Route, Routes } from 'react-router-dom'
import Ecommerce from './pages/Ecommerce'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Ecommerce/>}/>
    </Routes>
  )
}

export default App
