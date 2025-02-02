import React, { useEffect, useState } from "react";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("/api/users");
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleEditUser = (id) => {
        // Navigate to edit page
    };

    const handleDeleteUser = async (id) => {
        try {
            const response = await fetch(`/api/users/${id}`, { method: "DELETE" });
            if (response.ok) {
                setUsers(users.filter((user) => user.id !== id));
                alert("User deleted!");
            } else {
                alert("Failed to delete user!");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div>
            <h2>Manage Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.email}
                        <button onClick={() => handleEditUser(user.id)}>Edit</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageUsers;
