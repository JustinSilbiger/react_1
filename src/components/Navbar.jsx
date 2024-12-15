import logo from '../assets/react.svg'

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <img className="nav-logo" src={logo} alt="React Logo" />
        <span className="nav-text">ReactFacts</span>
      </nav>
    </header>
  )
}
