import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ComingSoon from './page/ComingSoon'
import MainLayout from './page/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/loading" />} />
        <Route exact path="/loading" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
