import logoSpotify from '../../assets/logo/spotify-logo.png'
import "./style.css"

export default function Header() {
    return (
      <div className='header'>
        <img src={logoSpotify} alt="logo spotify" />
        <a href="/">
          <h1 className='header__link'>Spotify Clone</h1>
        </a>
      </div>
    );
}