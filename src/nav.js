import React from 'react';
import Logo from '../icons_assets/Logo.svg'

const Navbar = () => {
    return (
        <nav className="nav-menu">
            <img src = {Logo} alt = "Little-Lemon-Logo" />
            <ul className="menu">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservatins</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>

            </ul>

        </nav>
    )
}

export default Navbar