import React, { useState } from "react";
import './/BookingForm.css'


export function BookingForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [availableTimes, setAvailableTimes] = useState(['17:00']);
    const [occasion, setOccasion] = useState('Birthday');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, date, availableTimes, guests, occasion);
        setName("");
        setEmail("");
        setDate("");
        setAvailableTimes('17:00');
        setGuests("");
        setOccasion('Birthday');
        alert("Your Table Has Been Reserved");
    }

    return (
        <>
            <section className="container">
                <form onSubmit={handleSubmit}>
                    <section className="wrapper">
                        <label className="lab1">Reserve A Table</label>
                        <label htmlFor="res-name" className="lab2">Name:</label>
                        <fieldset className="inp111"><input className="inp1" type="text" id="res-name" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} /></fieldset>
                        <label htmlFor="res-email" className="lab2">Email:</label>
                        <fieldset className="inp111"><input className="inp1" type="email" id="res-email" placeholder="example@mail.com" required value={email} onChange={(e) => setEmail(e.target.value)} /></fieldset>
                        <label htmlFor="res-date" className="lab2">Choose date:</label>
                        <fieldset className="inp111"><input className="inp1 inp11" type="date" id="res-date" required value={date} onChange={(e) => setDate(e.target.value)} /></fieldset>
                        <label htmlFor="res-time" className="lab2">Choose time:</label>
                        <fieldset className="inp111"><select className="inp1" id="res-time" value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                        </select></fieldset>
                        <label htmlFor="guests" className="lab2">Number Of Guests:</label>
                        <fieldset className="inp111"><input className="inp1" type="number" placeholder="1-4" min="1" max="4" id="guests" required value={guests} onChange={(e) => setGuests(e.target.value)} /></fieldset>
                        <label htmlFor="occasion" className="lab2">Occasion:</label>
                        <fieldset className="inp111"><select className="inp1" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select></fieldset>
                    </section>
                    <section className="bntsectform">
                        <button disabled={!name || !email || !date || !guests} type="submit" className="but1">Make Your reservation</button></section>

                </form >
            </section >
        </>
    )
}