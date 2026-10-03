import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
    return (
        <div>
            <h1>My Portfolio</h1>
            <nav>
                <img src="../src/assets/navicon.png" id="navicon" alt="Icon for navigation" />
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link> | <Link to="/project">Project</Link> | <Link to="/service">Services/Skills</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </div>
    );
}
