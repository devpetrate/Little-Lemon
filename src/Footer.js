import Flogo from './icons/Ui kit (1).png'

function Footer() {
    return (
        <>
            <img src={Flogo} alt="Footer Logo" />
            <section>
                <h3>Doormat navigation</h3>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Reservation</p>
                <p>Order Online</p>
                <p>Login</p>
            </section>
            <section>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </section>
            <section>
                <h3>Social Media Links</h3>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </section>
        </>
    )
};
export default Footer;