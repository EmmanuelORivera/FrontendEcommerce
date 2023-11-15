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
import ProtectedRoute from './Components/Route/ProtectedRoute'
import { loadUser } from './actions/userAction'
import UpdateProfile from './Components/Security/UpdateProfile'
import ForgotPassword from './Components/Security/ForgotPassword'
import NewPassword from './Components/Security/NewPassword'
import UpdatePassword from './Components/Security/UpdatePassword'

function App() {
  const dispatch = useAppDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getCategories())

    if (token) {
      dispatch(loadUser())
    }
  }, [dispatch, token])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<NewPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/me" element={<Profile />} />
            <Route path="/me/update" element={<UpdateProfile />} />
            <Route path="/password/update" element={<UpdatePassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
      <Footer />
    </>
  )
}

export default App
