import './index.css'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo"
        />
        <h1 className="logo-name">wave</h1>
      </div>

      <ul className="nav-elements-container">
        <li className="nav-items">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-items">
          <Link to="/about"> About</Link>
        </li>
        <li className="nav-items">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
