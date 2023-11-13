import { useState } from 'react'
import MetaData from '../Layout/MetaData'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../hooks'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const dispatch = useAppDispatch()
  const {} = useAppSelector((state) => state.forgotPassword)
  return (
    <>
      <MetaData title="Forgot Password" />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg">
            <h1 className="mb-3">Forgot Password</h1>
            <div className="form-group">
              <label htmlFor="email_field">Enter Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value=""
              />
            </div>

            <button
              id="forgot_password_button"
              type="submit"
              className="btn btn-block py-3"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
