import './App.css'
import Home from './Components/Home'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
