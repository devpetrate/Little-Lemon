import Logo from "./Logo.svg";
import './ConfirmedBooking.css'
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
    return (
        <>
            <section className="cbsectt">
                <img className="logoo1" src={Logo} alt="Little lemon logo" />
                <button className="cbbtn1">Your Table Has Been Reserved</button>
                <Link to="/"> <button className="cbbtn2">HomePage</button></Link>
            </section>
        </>
    )
}

export default ConfirmedBooking