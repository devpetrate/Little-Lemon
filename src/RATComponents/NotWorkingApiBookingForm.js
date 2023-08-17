import React, { useState, useReducer, useEffect } from "react";
import ".//BookingForm.css";
import { fetchAPI, submitAPI } from "./api";
import ConfirmedBooking from "./ConfirmedBooking";

function reducer(state, action) {
    switch (action.type) {
        case "SET_AVAILABLE_TIMES":
            return {
                ...state,
                availableTimes: action.payload,
            };
        case "SET_SELECTED_DATE":
            return {
                ...state,
                selectedDate: action.payload,
            };
        default:
            return state;
    }
}

export function BookingForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState("");

    const initialState = {
        availableTimes: ["17:00"],
        selectedDate: "",
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.selectedDate) {
            fetchAPI(state.selectedDate)
                .then((response) => {
                    dispatch({ type: "SET_AVAILABLE_TIMES", payload: response });
                })
                .catch((error) => {
                    // Handle error if necessary
                });
        }
    }, [state.selectedDate]);

    const [occasion, setOccasion] = useState("Birthday");

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            date: state.selectedDate,
            guests,
            occasion,
        };

        try {
            const response = await submitAPI(formData);
            if (response === true) {
                return (<ConfirmedBooking />);
            } else {
                console.error("Form submission failed.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <section className="container">
                <form onSubmit={submitForm}>
                    <section className="wrapper">
                        <label className="lab1">Reserve A Table</label>
                        <label htmlFor="res-name" className="lab2">Name:</label>
                        <fieldset className="inp111"><input className="inp1" type="text" id="res-name" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} /></fieldset>
                        <label htmlFor="res-email" className="lab2">Email:</label>
                        <fieldset className="inp111"><input className="inp1" type="email" id="res-email" placeholder="example@mail.com" required value={email} onChange={(e) => setEmail(e.target.value)} /></fieldset>
                        <label htmlFor="res-date" className="lab2">Choose date:</label>
                        <fieldset className="inp111">
                            <input
                                className="inp1 inp11"
                                type="date"
                                id="res-date"
                                required
                                value={state.selectedDate}
                                onChange={(e) => dispatch({ type: "SET_SELECTED_DATE", payload: e.target.value })}
                            />
                        </fieldset>
                        <label htmlFor="res-time" className="lab2">Choose time:</label>
                        <fieldset className="inp111">
                            <select
                                className="inp1"
                                id="res-time"
                                value={state.availableTimes}
                                onChange={(e) => dispatch({ type: "SET_AVAILABLE_TIMES", payload: e.target.value })}
                            >
                                {state.availableTimes.map(time => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </fieldset>
                        <label htmlFor="guests" className="lab2">Number Of Guests:</label>
                        <fieldset className="inp111"><input className="inp1" type="number" placeholder="1-4" min="1" max="4" id="guests" required value={guests} onChange={(e) => setGuests(e.target.value)} /></fieldset>
                        <label htmlFor="occasion" className="lab2">Occasion:</label>
                        <fieldset className="inp111"><select className="inp1" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select></fieldset>
                    </section>
                    <section className="bntsectform">
                        <button disabled={!name || !email || !guests} type="submit" className="but1">Make Your reservation</button></section>

                </form >
            </section >
        </>
    )
}