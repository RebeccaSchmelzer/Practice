import React, { useState, useEffect } from "react";
import axios from "axios";

export const ListCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        filterCourses();
    }, [searchTerm, courses, filterCourses]);

    const fetchCourses = async () => {
        try {
            const result = await axios.get("https://example.com/api/courses");
            setCourses(result.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };

    const filterCourses = React.useCallback(() => {
        const filtered = courses.filter(course =>
            course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(filtered);
    }, [courses, searchTerm]);

    const sortCoursesByTitle = () => {
        const sorted = [...filteredCourses].sort((a, b) => a.title.localeCompare(b.title));
        setFilteredCourses(sorted);
    };

    const filterCoursesByDuration = (duration) => {
        const filtered = courses.filter(course => course.duration === duration);
        setFilteredCourses(filtered);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const renderCourse = ({ id, title, instructor: { name, email }, duration, topics }) => (
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
    );

    const renderCourseList = () => (
        <ul>
            {filteredCourses.map(course => renderCourse(course))}
        </ul>
    );

    return (
        <div>
            <h1>Course List</h1>
            <input
                type="text"
                placeholder="Search by instructor"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button onClick={sortCoursesByTitle}>Sort by Title</button>
            <button onClick={() => filterCoursesByDuration("3 hours")}>Filter by 3 hours</button>
            <button onClick={() => filterCoursesByDuration("5 hours")}>Filter by 5 hours</button>
            {loading ? <p>Loading...</p> : renderCourseList()}
        </div>
    );
};

export default ListCourses;