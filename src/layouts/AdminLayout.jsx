// src/layouts/AdminLayout.jsx
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import Navbar from '../components/admin/Navbar';
import './AdminLayout.css';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        // Auto-collapse sidebar on mobile
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="admin-layout">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className={`admin-main ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
                <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;