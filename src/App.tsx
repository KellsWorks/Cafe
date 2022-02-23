import './App.css'
import './utils/additional-styles/Patterns.css'
import { Route, Routes } from 'react-router-dom'
import Ecommerce from './pages/Ecommerce'
import ComplexData from './pages/ComplexData'
import Document from './pages/Document'
import Project from './pages/Project'
import LoginScreenOne from './pages/dashboard/pages/authentication/LoginScreenOne'
import EmailTemplates from './pages/dashboard/EmailTemplates'
import CookieBanners from './pages/dashboard/CookieBanners'
import MobileApp from './pages/dashboard/pages/authentication/landing/MobileApp'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Ecommerce/>}/>

      <Route path='/complex-data' element={<ComplexData/>}/>

      <Route path='/document' element={<Document/>}/>

      <Route path='/kanban' element={<Project/>}/>

      <Route path='/dashboard/email-templates' element={<EmailTemplates/>}/>

      <Route path='/dashboard/cookie-banners' element={<CookieBanners/>}/>


      <Route path='/dashboard/pages/authentication/login_1' element={<LoginScreenOne/>}/>

      <Route path='/dashboard/pages/landing/mobile-app' element={<MobileApp/>}/>
    </Routes>
  )
}

export default App
