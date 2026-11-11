import "./Header.css"
import { Link } from "react-router-dom";
import logo from "./icons/logo.png";
import user_icon from "./icons/user_icon.png";
import search_icon from "./icons/search_icon.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/site">Service</a>
        <a>Agents</a>
        <a>Contact</a>
      </div>
      <div className="header_btns">
        <div className="search_icon">
          <img src={search_icon} />
        </div>
        <div className="user_icon">
          <Link to={"/login"}>
          <img src={user_icon} />
          </Link>
        
        </div>
        <div>
          <Link to={"/registration"} className="btnSignUp">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
