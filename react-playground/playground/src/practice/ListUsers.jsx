import { useEffect, useState } from "react";
import React from "react";

export const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await fetch("https://example.com/api/users");
            const data = await result.json();
            setUsers(data);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User list</h1>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <p>name: {user.name}</p>
                            <p>email: {user.email}</p>
                            <p>phone: {user.phone}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};