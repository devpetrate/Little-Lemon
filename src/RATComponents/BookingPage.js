import Footer from "../Footer";
import { BookingForm } from "./BookingForm";
import Header from "../Header";
import Nav from "../Nav";
import React from "react";
import tab1 from "./table1.jpg"
import tab2 from "./table2.jpg"

function BookingPage() {
    return (
        <>
            <section className="navbar">
                <Header />
                <Nav /></section>
            <section className='sect22 boksect'>

                <section className='sect23 boksect1'>
                    <img className='img2 bokimg' src={tab1} alt="Little lemon salad" width="150px" />
                    <section className='sectn boktext'><h2 className='text22'>Table For Two</h2></section>
                    <p className='text24 boktext1 ' >A table for two date provides an intimate setting for meaningful conversations and shared experiences, fostering a deeper connection and enhancing emotional bonding between partners. It creates a space where genuine connections can flourish, making it an invaluable opportunity for building a strong and lasting relationship.</p>
                </section>
                <section className='sect23 boksect1'>
                    <img className='img2 bokimg' src={tab2} alt="Little lemon salad" width="150px" />
                    <section className='sectn boktext'><h2 className='text22'>Table For Four</h2>
                    </section>
                    <p className='text24 boktext1'>A table for four date encourages dynamic interactions and diverse conversations, allowing for a richer and more inclusive social experience that brings individuals closer together. It facilitates the formation of deeper connections among participants, making it a valuable setting for building friendships and strengthening relationships.</p>
                </section>
            </section>
            <BookingForm />
            <Footer />
        </>
    )
};
export default BookingPage;