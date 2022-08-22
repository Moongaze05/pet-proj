import { Route, Routes, NavLink, Link } from "react-router-dom"
import logo from "../assets/images/logo-bitches.jpg"

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" height={100} />
      </Link>
      <div>
        <Link to="/" style={{ marginRight: 10 }}>
          About
        </Link>

        <Link to="/" style={{ marginRight: 10 }}>
          Contacts
        </Link>
      </div>
    </header>
  )
}