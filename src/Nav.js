import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <ul>
                <li><Link to="/" className='navanchor'>Home</Link></li>
                <li><Link to="/main" className='navanchor'>About</Link></li>
                <li><a href="github.com" className='navanchor'>Menu</a></li>
                <li><a href="github.com" className='navanchor'>Reservations</a></li>
                <li><a href="github.com" className='navanchor'>Order Online</a></li>
                <li><a href="github.com" className='navanchor'>Login</a></li>
            </ul>
        </>
    )
};
export default Nav;