import { Route, Routes, NavLink, Link } from "react-router-dom"
import logo from "../assets/images/logo-bitches.jpg"

export default function Header(props) {
  const activeStyle = {
    textDecoration: "underline"
  }
  return (
    <header>
      <nav className="header">
        <Link to="/" className="header-navigation header-navigation__logo">
          <img src={logo} alt="logo" height={55} />
        </Link>
        <div>
          <NavLink to="/about" className="header-navigation" style={({ isActive }) => isActive ? activeStyle : undefined}>
            About
          </NavLink>
          <NavLink to="/contacts" className="header-navigation" style={({ isActive }) => isActive ? activeStyle : undefined}>
            Contacts
          </NavLink>
        </div>
      </nav>
    </header >
  )
}