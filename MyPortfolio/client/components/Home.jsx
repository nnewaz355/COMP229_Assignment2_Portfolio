// src/components/Home.jsx or src/pages/Home.jsx

// This portfolio has been created based on my resume from the Employment Preparation course at Centennial College. The portfolio is designed to showcase my skills, projects, and experience as a software developer. It serves as a digital representation of my professional profile, allowing potential employers and collaborators to learn more about me and my work.
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="hero-content">
            <h1>Welcome to Nevan Newaz's Portfolio!</h1>
            <p className="hero-target-role"> {/*Target Role for Nevan.*/}
                Junior Software Developer
            </p>
            <div className="mission-statement">
                <h3>Mission Statement</h3>
                <p>
                    To engineer robust, maintainable, and user-centric software solutions by adhering to proven design principles and adaptive full-stack architectures.
                </p>
            </div>

                {/* Shows the buttons for navigation to other pages in the portfolio. */}
            <div className="hero-actions">
                <h3>What To Do Next:</h3>
                <Link to="/about" className="btn btn-primary">
                    Learn More About Me
                </Link><br></br>
                <Link to="/education" className="btn btn-secondary">
                    My Education
                </Link><br></br>
                <Link to="/project" className="btn btn-secondary">
                    View Featured Projects
                </Link><br></br>
                <Link to="/service" className="btn btn-secondary">
                    My Skills
                </Link><br></br>
                <Link to="/contact" className="btn btn-secondary">
                    Contact Me
                </Link><br></br>
            </div>
        </div>
    );
}