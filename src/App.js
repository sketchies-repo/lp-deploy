import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from './page/MainLayout'
import HomePage from './page/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
