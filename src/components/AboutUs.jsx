import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function f1() {
    return axios.get('https://my-first-app-backend-5uf6.onrender.com/users')
    // return axios.get('/users')
    
}

export default function AboutUs() {
    const { isLoading, data, error, isError, isFetched } = useQuery({
        queryKey: 'k1',
        queryFn: f1
    })

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
                <h2>{isLoading && "Loading..."}</h2>
                <h2>{isError && "Oops! technical issue"}</h2>
                <ul>
                    {data?.data?.map(d => {
                        return <li>{d.name}</li>
                    })}
                </ul>
            </section>

            <section className="values">
                <h2>People at work</h2>
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