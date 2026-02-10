import React from 'react';

export default function AboutUs() {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>
                Welcome to our application. We are dedicated to providing the best user 
                experience and innovative solutions.
            </p>
            
            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    To create meaningful applications that make a positive impact on our users' lives.
                </p>
            </section>

            <section className="values">
                <h2>Our Values</h2>
                <ul>
                    <li>Innovation</li>
                    <li>Quality</li>
                    <li>User-Focused</li>
                    <li>Integrity</li>
                </ul>
            </section>

            <section className="team">
                <h2>Our Team</h2>
                <p>
                    Our talented team is committed to building exceptional products and services.
                </p>
            </section>
        </div>
    );
}