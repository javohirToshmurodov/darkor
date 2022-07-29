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
import CourseTable from "./pages/Admin/CoursesTable"
import EmployeeDetail from "./components/Employees/EmployeeDetail";
import StatisticsCrud from './pages/Admin/StatisticsCrud'
import Form from './pages/Admin/Form'
import AdminService from "./components/AdminService"
import ExpertDetail from "./pages/Experts/ExpertDetail";
import Form from "./pages/Admin/Form"
import EditCouresModal from "./components/EditCourseModal";
function App() {
  return (
    <>
      <OffcanvasExample />
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="employee" element={<Employees />} />
        <Route path="employee/:id" element={<EmployeeDetail />} />
        <Route path="services" element={<Services />} />
        <Route path="experts" element={<Experts />} />
        <Route path="experts/:code" element={<ExpertDetail />} />
        <Route path="admin" element={<Admin />}>
          <Route path="create-employee" element={<CreateEmployee />} />
          <Route path="courses" element={<CoursesCrud />} />
          <Route path="courses_info" element={<CourseInfo />} />
          <Route path="coursetable" element={<CourseTable />} />
          <Route path="coursetable/:id" element={<EditCouresModal />} />
          <Route path="form" element={<Form />} />
          <Route path='service' element={<AdminService />} />
          <Route path='statiscs' element={<StatisticsCrud />} />
          <Route path='form' element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
