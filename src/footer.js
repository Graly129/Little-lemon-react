import logo from '../icons_assets/Logo.svg';

const Footer = () => {
    return (
        <>
    <img src={logo} alt="Logo" />

    <div className='col-1'>
        <h4>Doormat Navigation</h4>
        <ul class="menu">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservatins</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </div>


    <div className='col-2'>
        <h4>Contact</h4>
        <ul>
            <li><a>Address</a></li>
            <li><a>Phone No</a></li>
            <li><a>Email</a></li>
        </ul>
    </div>

    <div className='col-3'>
        <h4>Social Media Links</h4>
        <ul>
            <li><a>Address</a></li>
            <li><a>Phone No</a></li>
            <li><a>Email</a></li>
        </ul>
    </div>
</>
    )
}

export default Footer