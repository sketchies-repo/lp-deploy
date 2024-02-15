import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ComingSoon from './page/ComingSoon'
import MainLayout from './page/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
