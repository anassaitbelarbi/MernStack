import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "@layouts/mainLayout/Layout"
import Login from '@pages/login/Login'

// Styles
import './App.css'
import Test from '@pages/test/Test'


function App() {
  return (

      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
          <Routes>
            <Route path="/test" element={<Test />} />
          </Routes>
      </BrowserRouter>

  )
}

export default App
