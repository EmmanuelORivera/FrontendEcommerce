import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast } from 'react-toastify'
import Search from './Search'
import { logout } from '../../slices/securitySlice'
import { Link } from 'react-router-dom'

const Header = () => {
  const { user, loading } = useAppSelector((state) => state.security)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    toast.success('User was successfully logout')
  }
  return (
    <header data-testid="header">
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/" data-testid="home-link">
              <img src="/images/logo.png" className="logo" />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user! && user.avatar}
                    alt={user! && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.roles!.includes('ADMIN') && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}

                <Link to="/orders/me" className="dropdown-item">
                  Orders
                </Link>

                <Link to="/me" className="dropdown-item">
                  Profile
                </Link>

                <Link to="/" className="dropdown-item" onClick={logoutHandler}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn ml-4"
              data-testid="login_btn"
              id="login_btn"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
