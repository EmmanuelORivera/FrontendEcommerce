import './App.css'
import Home from './Components/Home'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductDetail from './Components/Product/ProductDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
      <Footer />
    </>
  )
}

export default App
