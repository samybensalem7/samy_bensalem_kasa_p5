import logo from "../../assets/logo.png";
import './Header.scss';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <img src={logo} alt="logo Kasa" className="navbar__logo"/>
      <nav className="navbar__nav">
        <NavLink to="/" className={({isActive})=> isActive ? "navbar__link--active " : undefined}> Accueil</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? "navbar__link--active" : undefined}> A propos</NavLink>
        
      </nav>
    </header>
  );
}

export default Header;
