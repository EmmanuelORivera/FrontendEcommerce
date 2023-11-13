import { useEffect, useState } from 'react'
import MetaData from '../Layout/MetaData'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { resetError } from '../../slices/forgotPasswordSlice'
import { forgotPassword } from '../../actions/userAction'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const dispatch = useAppDispatch()
  const { errors, message, loading } = useAppSelector(
    (state) => state.forgotPassword
  )

  useEffect(() => {
    if (errors) {
      errors.forEach((error) => toast.error(error))
      dispatch(resetError())
    }

    if (message) {
      toast.success(message)
    }
  }, [dispatch, toast, errors, message])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(forgotPassword({ email }))
  }
  return (
    <>
      <MetaData title="Forgot Password" />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Forgot Password</h1>
            <div className="form-group">
              <label htmlFor="email_field">Enter Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              id="forgot_password_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading}
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
