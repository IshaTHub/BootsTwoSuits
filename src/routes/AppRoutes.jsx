// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WebsiteRoutes from './WebsiteRoutes';
import AdminRoutes from './AdminRoutes';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Website Routes */}
                <Route path="/*" element={<WebsiteRoutes />} />

                {/* Admin Routes */}
                <Route path="/admin/*" element={<AdminRoutes />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;