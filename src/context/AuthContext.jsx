// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import APIClient from '../services/api/APIClient';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        setLoading(false);
    };

    const login = async (email, password) => {
        try {
            // Fetch users from mock API
            const users = await APIClient.get('/users');

            // Find matching user
            const foundUser = users.find(
                (u) => u.email === email && u.password === password
            );

            if (foundUser) {
                // Remove password before storing
                const { password: _, ...userWithoutPassword } = foundUser;

                localStorage.setItem('user', JSON.stringify(userWithoutPassword));
                localStorage.setItem('authToken', 'mock-token-' + foundUser.id);

                setUser(userWithoutPassword);
                setIsAuthenticated(true);

                return { success: true };
            } else {
                return { success: false, error: 'Invalid email or password' };
            }
        } catch (err) {
            console.error('Login error:', err);
            return { success: false, error: 'Login failed. Please try again.' };
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        setUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        user,
        loading,
        isAuthenticated,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};