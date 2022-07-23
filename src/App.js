import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import { Navigate } from 'react-router-dom'
import CrudComponents from './pages/Admin/CrudComponents'
import CoursesCrud from './pages/Admin/CoursesCrud'
import CourseInfo from './pages/Admin/Course_Info'
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
        <Route path='admin' element={<Admin />} >
          <Route path='courses' element={<CoursesCrud />} />
          <Route path='courses_info' element={<CourseInfo />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
