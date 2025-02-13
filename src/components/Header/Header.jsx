import { Link } from "react-router-dom";
import logoSpotify from "../../assets/logo/spotify-logo.png";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="logo spotify" />
      </Link>
      <Link to="/">
        <h1 className="header__link">Spotify Clone</h1>
      </Link>
    </div>
  );
}
