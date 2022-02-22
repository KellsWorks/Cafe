import './App.css'
import { Route, Routes } from 'react-router-dom'
import Ecommerce from './pages/Ecommerce'
import ComplexData from './pages/ComplexData'
import Document from './pages/Document'
import Project from './pages/Project'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Ecommerce/>}/>

      <Route path='/complex-data' element={<ComplexData/>}/>

      <Route path='/document' element={<Document/>}/>

      <Route path='/kanban' element={<Project/>}/>
    </Routes>
  )
}

export default App
