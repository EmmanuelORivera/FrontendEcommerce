import Search from './Search'

const Header = () => {
  return (
    <header data-testid="header">
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img src="/images/logo.png" className="logo" />
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" data-testid="login_btn" id="login_btn">
            Login
          </button>

          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header
