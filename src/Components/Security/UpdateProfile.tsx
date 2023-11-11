import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { resetUpdateStatus } from '../../slices/securitySlice'
import MetaData from '../Layout/MetaData'
import { update } from '../../actions/userAction'

const UpdateProfile = () => {
  const navigate = useNavigate()
  const [userSession, setUserSession] = useState({
    name: '',
    lastName: '',
    phone: '',
  })

  const [avatar, setAvatar] = useState<File>()
  const [avatarPreview, setAvatarPreview] = useState(
    '/images/default_avatar.jpg'
  )

  const dispatch = useAppDispatch()

  const { errors, isAuthenticated, loading, user, isUpdated } = useAppSelector(
    (state) => state.security
  )

  useEffect(() => {
    if (isAuthenticated) {
      setUserSession({
        lastName: user!.lastName,
        name: user!.name,
        phone: user!.phone,
      })

      setAvatarPreview(user!.avatar)
    }

    if (errors) {
      errors.forEach((error) => toast.error(error))
    }

    if (isUpdated) {
      toast.success('User was successfully updated')
      navigate('/me')
      dispatch(resetUpdateStatus())
    }
  }, [dispatch, alert, isAuthenticated, errors, user, isUpdated, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState == 2) {
          setAvatarPreview(reader.result as string)
          setAvatar(e.target.files![0])
        }
      }
      reader.readAsDataURL(e.target.files![0])
    } else {
      setUserSession((prevUserSession) => ({
        ...prevUserSession,
        [e.target.name]: e.target.value,
      }))
    }
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.set('name', userSession.name)
    formData.set('lastName', userSession.lastName)
    formData.set('phone', userSession.phone)
    formData.set('email', user!.email)
    formData.set('username', user!.username)
    formData.set('photo', avatar as File)

    dispatch(update(formData))
  }

  return (
    <>
      <MetaData title="Update Profile" />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <h1 className="mt-2 mb-5">Update Profile</h1>

            <div className="form-group">
              <label htmlFor="name_field">Name</label>
              <input
                type="name"
                id="name_field"
                className="form-control"
                name="name"
                value={userSession.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last_name_field">Last name</label>
              <input
                type="name"
                id="last_name_field"
                className="form-control"
                name="lastName"
                value={userSession.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_field">Phone</label>
              <input
                type="name"
                id="phone_field"
                className="form-control"
                name="phone"
                value={userSession.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="Avatar Preview"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="images/*"
                    onChange={handleChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn update-btn btn-block mt-4 mb-3"
              disabled={loading}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile
