import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Theme/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/flight' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;