import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './page/MainLayout'
import HomePage from './page/HomePage'

export default function App() {
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