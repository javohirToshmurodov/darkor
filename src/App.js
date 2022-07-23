import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import { Navigate } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
        <Route path='admin' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
