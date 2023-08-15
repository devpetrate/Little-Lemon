import Flogo from './icons/Ui kit (1).png'
import './Footer.css'

function Footer() {
    return (
        <>
            <section className='sectf'>
                <img className='imgf' src={Flogo} alt="Footer Logo" />
                <section className='sectf1'>
                    <h3 className='h3f'>Doormat navigation</h3>
                    <p className='pf'>Home</p>
                    <p className='pf'>About</p>
                    <p className='pf'>Menu</p>
                    <p className='pf'>Reservation</p>
                    <p className='pf'>Order Online</p>
                    <p className='pf'>Login</p>
                </section>
                <section className='sectf1'>
                    <h3 className='h3f'>Contact</h3>
                    <p className='pf'>Address</p>
                    <p className='pf'>Phone number</p>
                    <p className='pf'>Email</p>
                </section>
                <section className='sectf1'>
                    <h3 className='h3f'>Social Media Links</h3>
                    <p className='pf'>Address</p>
                    <p className='pf'>Phone number</p>
                    <p className='pf'>Email</p>
                </section>
            </section>
        </>
    )
};
export default Footer;