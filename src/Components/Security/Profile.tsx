import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import Loader from '../Layout/Loader'

const Profile = () => {
  const { user, loading } = useAppSelector((state) => state.security)

  if (loading) {
    return <Loader />
  }
  return (
    <>
      <h2 className="mt-5 ml-5">My Profile</h2>
      <div className="row justify-content-around mt-5 user-info">
        <div className="col-12 col-md-3">
          <figure className="avatar avatar-profile">
            <img
              className="rounded-circle img-fluid"
              src={user?.avatar ?? 'images/default_avatar.jpg'}
              alt=""
            />
          </figure>
          <a
            href="#"
            id="edit_profile"
            className="btn btn-primary btn-block my-5"
          >
            Edit Profile
          </a>
        </div>

        <div className="col-12 col-md-5">
          <h4>Full Name</h4>
          <p>{user && user.name}</p>

          <h4>Last Name</h4>
          <p>{user && user.lastName}</p>

          <h4>Phone</h4>
          <p>{user && user.phone}</p>

          <h4>Username</h4>
          <p>{user && user.username}</p>

          <h4>Email</h4>
          <p>{user && user.email}</p>

          {user && !user.roles?.includes('ADMIN') && (
            <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
              My Orders
            </Link>
          )}
          <Link
            to="/password/update"
            className="btn btn-primary btn-block mt-3"
          >
            Change Password
          </Link>
        </div>
      </div>
    </>
  )
}

export default Profile
