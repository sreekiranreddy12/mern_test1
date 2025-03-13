import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.contact} - {user.location} - {user.emergencyType}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;