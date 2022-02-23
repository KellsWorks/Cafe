import './App.css'
import './utils/additional-styles/Patterns.css'
import { Route, Routes } from 'react-router-dom'
import Ecommerce from './pages/Ecommerce'
import ComplexData from './pages/ComplexData'
import Document from './pages/Document'
import Project from './pages/Project'
import LoginScreenOne from './pages/dashboard/pages/authentication/LoginScreenOne'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Ecommerce/>}/>

      <Route path='/complex-data' element={<ComplexData/>}/>

      <Route path='/document' element={<Document/>}/>

      <Route path='/kanban' element={<Project/>}/>

      <Route path='/dashboard/pages/authentication/login_1' element={<LoginScreenOne/>}/>
    </Routes>
  )
}

export default App
