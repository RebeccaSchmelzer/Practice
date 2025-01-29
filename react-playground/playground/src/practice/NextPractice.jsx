import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = ({ initialCourses }) => {
    const [courses, setCourses] = useState(initialCourses);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Initialize WebSocket connection
        const ws = new WebSocket('ws://localhost:5000');

        ws.onopen = () => {
            console.log('WebSocket connection opened');
            ws.send('Hello from the client!');
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        ws.oncourses = (event) => {
            const course = JSON.parse(event.data)
            setCourses((prevCourses) => [...prevCourses, course])
        }

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Cleanup WebSocket connection on component unmount
        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            <h1>Course List</h1>
            <ul>
                {courses.map(({ id, title, instructor: { name, email }, duration, topics }) => (
                    <li key={id}>
                        <h2>{title}</h2>
                        <p>Instructor: {name} ({email})</p>
                        <p>Duration: {duration}</p>
                        <p>Topics:</p>
                        <ul>
                            {topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <h1>WebSocket Messages</h1>
            <div>
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    try {
        const result = await axios.get('http://localhost:5000/api/courses');
        return {
            props: {
                initialCourses: result.data,
            },
        };
    } catch (error) {
        console.error('Error fetching courses:', error);
        return {
            props: {
                initialCourses: [],
            },
        };
    }
};

export default Courses;