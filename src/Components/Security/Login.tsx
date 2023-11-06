import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MetaData from '../Layout/MetaData'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../hooks'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { errors, isAuthenticated, loading } = useAppSelector(
    (state) => state.security
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error))
    }
  }, [isAuthenticated, errors])

  return (
    <>
      <MetaData title="Login" />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg">
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value=""
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value=""
              />
            </div>

            <a href="#" className="float-right mb-4">
              Forgot Password?
            </a>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
            >
              LOGIN
            </button>

            <a href="#" className="float-right mt-3">
              New User?
            </a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
