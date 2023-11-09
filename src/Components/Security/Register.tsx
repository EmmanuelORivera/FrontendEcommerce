import { useState } from 'react'
import MetaData from '../Layout/MetaData'
import { useAppDispatch } from '../../hooks'
import useAuthRedirect from '../../hooks/useAuthRedirect'

const Register = () => {
  const { loading } = useAuthRedirect()
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    userName: '',
    password: '',
  })
  const [avatar, setAvatar] = useState('')
  const [avatarPreview, setAvatarPreview] = useState(
    'images/default_avatar.jpg'
  )

  const dispatch = useAppDispatch()

  const { name, lastName, password, phone, email, userName } = user

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <>
      <MetaData title="Register User" />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <h1 className="mb-3">Register User</h1>

            <div className="form-group">
              <label htmlFor="email_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={user}
                name="name"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

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

            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img src="" className="rounded-circle" alt="image" />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
