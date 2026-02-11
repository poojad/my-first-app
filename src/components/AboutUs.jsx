import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { useMutation } from "@tanstack/react-query";

// ------- config ------
// const env = "dev"
const env = "prod"
// ---------------------


const dev = "http://localhost:5000";
const prod = "https://my-first-app-backend-5uf6.onrender.com";
const url = env == "dev" ? dev : prod;

function f1() {
    return axios.get(`${url}/users`)

    // return axios.get('http://localhost:5000/users')
    // return axios.get('/users')       //using proxy in package json
    // use configuration - dev n production
}

const f2 = async (data) => {
    debugger;
    const response = await axios.post(`${url}/users`, { name: data.name });
    return response.data;
}

export default function AboutUs() {
    const [people, setPeople] = useState('')

    const { isLoading, data, error, isError } = useQuery({
        queryKey: 'k1',
        queryFn: f1
    })

    const mutation = useMutation({
        mutationFn: f2,
        onSuccess: (data) => {
            console.log("User created:", data);
            //on update - reffetch it f1
        },
        onError: (error) => {
            console.log("Error:", error);
        }
    });

    const handleClick = (d) => {
        mutation.mutate({
            name: d
        });
    };

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
                <h2>Our People</h2>
                <h2>{isLoading && "Loading..."}</h2>
                <h2>{isError && "Oops! technical issue"}</h2>
                <h2>{isError && error.message}</h2>
                <ul>
                    {data?.data?.map(d => {
                        return <li>{d.name}</li>
                    })}
                </ul>
                <input type="text" name={people} onChange={(d) => setPeople(d)}></input>
                <button onClick={() => {
                    // but why? check other approach
                    handleClick(people.target.value)
                    //call post call and send people
                    // react query understand
                }}>Add More</button>
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