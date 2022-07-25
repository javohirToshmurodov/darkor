import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import { Navigate } from 'react-router-dom'
import CrudComponents from './pages/Admin/CrudComponents'
import CoursesCrud from './pages/Admin/CoursesCrud'
import CourseInfo from './pages/Admin/Course_Info'
import OffcanvasExample from './components/navbar'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Experts from "./pages/Experts"
import About from "./pages/AboutCompany"
function App() {
  return (
    <>
      <OffcanvasExample />
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
        <Route path='experts' element={<Experts />} />
        <Route path='admin' element={<Admin />} >
          <Route path='courses' element={<CoursesCrud />} />
          <Route path='courses_info' element={<CourseInfo />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
