import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} alt="Logo" className="navbar__logo" />
        <div className="navbar__title">my travel journal.</div>
      </div>
    </nav>
  );
}
