import Logo from '../icons_assets/Logo.svg'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="nav-menu">
            <img src = {Logo} alt = "Little-Lemon-Logo" />
            <ul className="menu">
                <li><Link to = "/" className = "nav-item">Home</Link></li>
                <li><Link to = "/about" className = "nav-item">About</Link></li>
                <li><Link to = "/menu" className = "nav-item">Menu</Link></li>
                <li><Link to = "/reservation" className = "nav-item">Reservations</Link></li>
                <li><Link to = "/booking-forms" className = "nav-item">Order Online</Link></li>
                <li><Link to = "/login" className = "nav-item">Login</Link></li>

            </ul>

        </nav>
    )
}

export default Navbar