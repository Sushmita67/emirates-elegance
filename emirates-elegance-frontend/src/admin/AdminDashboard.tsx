import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBoxes, FaUsers, FaSignOutAlt, FaBars } from "react-icons/fa";

const sidebarLinks = [
    { title: "Products", href: "/admin/products", icon: <FaBoxes /> },
    { title: "Users", href: "/admin/users", icon: <FaUsers /> },
];

const AdminDashboard: React.FC = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleLogout = () => {
        // Handle admin logout
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <aside
                style={{
                    width: isSidebarCollapsed ? "60px" : "200px",
                    backgroundColor: "#1A202C",
                    color: "#fff",
                    transition: "width 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <button
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        margin: "10px",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                    }}
                >
                    <FaBars />
                </button>
                <nav style={{ flex: 1, padding: "10px" }}>
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.href}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                color: "#fff",
                                textDecoration: "none",
                                borderRadius: "4px",
                                marginBottom: "5px",
                                background: "transparent",
                                transition: "background 0.3s ease",
                                justifyContent: isSidebarCollapsed ? "center" : "flex-start",
                            }}
                            onMouseOver={(e) => {
                                (e.target as HTMLAnchorElement).style.background = "#2D3748";
                            }}
                            onMouseOut={(e) => {
                                (e.target as HTMLAnchorElement).style.background = "transparent";
                            }}
                        >
                            <span style={{ marginRight: isSidebarCollapsed ? 0 : "10px" }}>
                                {link.icon}
                            </span>
                            {!isSidebarCollapsed && <span>{link.title}</span>}
                        </Link>
                    ))}
                </nav>
                <button
                    onClick={handleLogout}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isSidebarCollapsed ? "center" : "flex-start",
                        padding: "10px",
                        color: "#fff",
                        background: "none",
                        border: "none",
                        fontSize: "1rem",
                        cursor: "pointer",
                    }}
                >
                    <FaSignOutAlt style={{ marginRight: isSidebarCollapsed ? 0 : "10px" }} />
                    {!isSidebarCollapsed && <span>Logout</span>}
                </button>
            </aside>

            {/* Main content */}
            <div style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
                {/* Topbar */}
                <header
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 20px",
                        backgroundColor: "#2D3748",
                        color: "#fff",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Admin Dashboard</h1>
                    <img
                        src="/path-to-your-logo.png"
                        alt="Logo"
                        style={{ height: "40px", cursor: "pointer" }}
                        onClick={() => (window.location.href = "/")}
                    />
                </header>

                {/* Content area */}
                <main style={{ padding: "20px" }}>
                    {/* Outlet allows rendering of nested routes */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
