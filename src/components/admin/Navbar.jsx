// src/components/admin/Navbar/Navbar.jsx
import { useAuth } from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
    const { user, logout } = useAuth();

    return (
        <header className="navbar">
            <div className="navbar-left">
                <button
                    className="sidebar-toggle"
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    {isSidebarOpen ? '✕' : '☰'}
                </button>
                <h2 className="navbar-title">Admin Panel</h2>
            </div>

            <div className="navbar-right">
                <div className="user-info">
                    <div className="user-avatar">
                        {user?.name?.charAt(0) || 'A'}
                    </div>
                    <div className="user-details">
                        <span className="user-name">{user?.name || 'Admin'}</span>
                        <span className="user-role">{user?.role || 'Administrator'}</span>
                    </div>
                </div>

                <button
                    onClick={logout}
                    className="logout-btn"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Navbar;