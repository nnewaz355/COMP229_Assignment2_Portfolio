import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Name: ${formData.fname} ${formData.lname}, Email: ${formData.email}, Message: ${formData.message}`
        );
        window.location.href = "/"; // Redirect to the home page after form submission
    };

    return (
        <div>
            <h1>Contact Information:</h1>
            <p>Email: <a href="mailto:nnewaz@my.centennialcollege.ca">nnewaz@my.centennialcollege.ca</a></p>
            <p>Phone: <a href="tel:+2899283224">+1 (289) 928-3224</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/nevan-newaz-022218371/">https://www.linkedin.com/in/nevan-newaz-022218371/</a></p>
            <br></br>
            <h2>Contact Us:</h2>
            <form onSubmit={handleSubmit} className="multiple">
                <label className="multiple__text block" html For="fname">
                    First Name:
                </label>
                <input
                    type="text"
                    id="fname"
                    className="multiple__input"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                />

                <label className="multiple__text block" html For="lname">
                    Last Name:
                </label>
                <input
                    type="text"
                    id="lname"
                    className="multiple__input"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                />

                <label className="multiple__text block" html For="phone-number">
                    Phone Number:
                </label>
                <input
                    type="tel"
                    id="phone-number"
                    className="multiple__input"
                    name="phone-number"
                    value={formData["phone-number"]}
                    onChange={handleChange}
                />

                <label className="multiple__text block" html For="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="multiple__input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label className="multiple__text block" html For="message">
                    Message:
                </label>
                <textarea
                    id="message"
                    className="multiple__textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <span className ="button">
                <button className="multiple__button" type="submit">
                    Submit
                </button>
                </span>
            </form>
        </div>

    );
}
