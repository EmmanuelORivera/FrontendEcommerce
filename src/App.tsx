import { useEffect } from 'react'
import './App.css'
import Home from './Components/Home'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductDetail from './Components/Product/ProductDetail'
import { useAppDispatch } from './hooks'
import { getCategories } from './actions/categoryAction'
import Login from './Components/Security/Login'
import Register from './Components/Security/Register'
import Profile from './Components/Security/Profile'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/me" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
      <Footer />
    </>
  )
}

export default App
