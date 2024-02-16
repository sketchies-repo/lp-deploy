import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from './page/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
