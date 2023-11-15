import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { resetError } from '../../slices/resetPasswordSlice'
import { resetPassword } from '../../actions/userAction'
import MetaData from '../Layout/MetaData'

const NewPassword = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  const dispatch = useAppDispatch()
  const { errors, message, loading } = useAppSelector(
    (state) => state.resetPassword
  )

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    if (errors) {
      errors.forEach((error) => toast.error(error))
      dispatch(resetError())
    }
    if (message) {
      toast.success(message)
      dispatch(resetError())
      navigate('/login')
    }
  }, [dispatch, toast, errors, message, navigate])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (token)
      dispatch(resetPassword({ email, password, confirmPassword, token }))
  }

  return (
    <>
      <MetaData title="Reset Password" />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">New Password</h1>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm_password_field">Confirm Password</label>
              <input
                type="password"
                id="confirm_password_field"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              id="new_password_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewPassword
