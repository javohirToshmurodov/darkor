<<<<<<< HEAD
import { Route, Routes, useParams } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import CrudComponents from "./pages/Admin/CrudComponents";
import CoursesCrud from "./pages/Admin/CoursesCrud";
import CourseInfo from "./pages/Admin/Course_Info";
import OffcanvasExample from "./components/navbar";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Experts from "./pages/Experts";
import About from "./pages/AboutCompany";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/Courses/CourseDetail";
import CreateEmployee from "./components/createEmployeAdmin";
import Employees from "./components/Employees";
import EmployeeDetail from "./components/Employees/EmployeeDetail";
=======
import { Route, Routes, useParams } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import { Navigate } from 'react-router-dom'
import CoursesCrud from './pages/Admin/CoursesCrud'
import CourseInfo from './pages/Admin/Course_Info'
import OffcanvasExample from './components/navbar'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Experts from "./pages/Experts"
import About from "./pages/AboutCompany"
import Courses from './pages/Courses'
import CourseDetails from './pages/Courses/CourseDetail'
import CreateEmployee from './components/createEmployeAdmin'
import AdminService from "./components/AdminService"
import StatisticsCrud from './pages/Admin/StatisticsCrud'
import Form from './pages/Admin/Form'
import ExpertDetail from './pages/Experts/ExpertDetail'
import CoursesTable from './pages/Admin/CoursesTable'
>>>>>>> 08bde1edc28be52cdc9cc2c1b316ed3914e103b7
function App() {
  return (
    <>
      <OffcanvasExample />
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="employee" element={<Employees />} />
        <Route path="employee/:id" element={<EmployeeDetail />} />
        <Route path="services" element={<Services />} />
        <Route path="experts" element={<Experts />} />
        <Route path="admin" element={<Admin />}>
          <Route path="create-employee" element={<CreateEmployee />} />
          <Route path="courses" element={<CoursesCrud />} />
          <Route path="courses_info" element={<CourseInfo />} />
        </Route>
      </Routes>
=======
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='courses' element={<Courses />} />
        <Route path='courses/:id' element={<CourseDetails />} />
        <Route path='services' element={<Services />} />
        <Route path='experts' element={<Experts />} />
        <Route path='experts/:code' element={<ExpertDetail />} />
        <Route path='admin' element={<Admin />} >
          <Route path='service' element={<AdminService />} />
          <Route path='create-employee' element={<CreateEmployee />} />
          <Route path='courses' element={<CoursesCrud />} />
          <Route path='courses_info' element={<CourseInfo />} />
          <Route path='statiscs' element={<StatisticsCrud />} />
          <Route path='coursetable' element={<CoursesTable />} />
          <Route path='form' element={<Form />} />
        </Route >

      </Routes >
>>>>>>> 08bde1edc28be52cdc9cc2c1b316ed3914e103b7
    </>
  );
}

export default App;
