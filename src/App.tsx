import './App.css'
import { Route, Routes } from 'react-router-dom'
import Ecommerce from './pages/Ecommerce'
import ComplexData from './pages/ComplexData'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Ecommerce/>}/>

      <Route path='/complex-data' element={<ComplexData/>}/>
    </Routes>
  )
}

export default App
