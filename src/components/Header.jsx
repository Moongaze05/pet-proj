import {Route, Routes, NavLink, Link} from "react-router-dom"
import logo from "../assets/images/logo-bitches.jpg"

export const activeStyle = {
  textDecoration: "underline"
}

export default function Header(props) {

  return (
    <header className="header">
      <nav className="header-nav container">
        <Link to="/" className="header-navigation header-navigation__logo link-hover">
          <img src={logo} alt="logo" height={55}/>
        </Link>
        <div>
          <NavLink to="/about" className="header-navigation link-hover"
                   style={({isActive}) => isActive ? activeStyle : undefined}>
            About
          </NavLink>
          <NavLink to="/contacts" className="header-navigation link-hover"
                   style={({isActive}) => isActive ? activeStyle : undefined}>
            Contacts
          </NavLink>
        </div>
      </nav>
    </header>
  )
}