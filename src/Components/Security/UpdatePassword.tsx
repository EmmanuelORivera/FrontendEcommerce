import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { resetUpdateStatus } from '../../slices/securitySlice'
import { updatePassword } from '../../actions/userAction'
import MetaData from '../Layout/MetaData'

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { errors, loading, isUpdated } = useAppSelector(
    (state) => state.security
  )

  useEffect(() => {
    if (errors) {
      errors.forEach((error) => toast.error(error))
    }

    if (isUpdated) {
      toast.success('Password was updated successfully')
      navigate('/me')
      dispatch(resetUpdateStatus())
    }
  }, [dispatch, toast, errors, isUpdated, navigate])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updatePassword({ oldPassword, newPassword }))
  }

  return (
    <>
      <MetaData title="Update Password" />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mt-2 mb-5">Update Password</h1>
            <div className="form-group">
              <label htmlFor="old_password_field">Old Password</label>
              <input
                type="password"
                id="old_password_field"
                className="form-control"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="new_password_field">New Password</label>
              <input
                type="password"
                id="new_password_field"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn update-btn btn-block mt-4 mb-3"
              disabled={loading}
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdatePassword
