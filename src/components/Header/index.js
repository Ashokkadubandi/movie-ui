import './index.css'

const Header = () => (
  <header className="header-section">
    <h1 className="logo">M</h1>
    <nav className="nav-section">
      <a href>Home</a>
      <a href>TV Shows</a>
      <a href>Movies</a>
      <a href>Profile</a>
    </nav>
    <button type="button" className="logout-btn">
      Logout
    </button>
  </header>
)

export default Header
