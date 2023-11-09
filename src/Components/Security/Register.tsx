import { useState } from 'react'
import MetaData from '../Layout/MetaData'
import { useAppDispatch } from '../../hooks'
import useAuthRedirect from '../../hooks/useAuthRedirect'
import { register } from '../../actions/userAction'

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

    const formData = new FormData()
    formData.set('name', name)
    formData.set('lastName', lastName)
    formData.set('phone', phone)
    formData.set('email', email)
    formData.set('username', userName)
    formData.set('password', password)
    formData.set('picture', avatar)

    dispatch(register(formData))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result)
          setAvatar(e.target.files[0])
        }
      }
      reader.readAsDataURL(e.target.files![0])
    } else {
      setUser({ ...user, [e.target.name]: e.target.value })
    }
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
              <label htmlFor="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last_name_field">Last Name</label>
              <input
                type="text"
                id="last_name_field"
                className="form-control"
                value={lastName}
                name="lastName"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_field">Phone</label>
              <input
                type="text"
                id="phone_field"
                className="form-control"
                value={phone}
                name="phone"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username_field">Username</label>
              <input
                type="text"
                id="username_field"
                className="form-control"
                value={userName}
                name="userName"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                name="password"
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
                      alt="preview image"
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
                    Upload Avatar
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
