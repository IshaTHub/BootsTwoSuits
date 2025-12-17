// src/routes/AdminRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from './ProtectedRoutes';

// Admin Pages
import Login from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';
// import UserList from '../pages/admin/Users/UserList';
// import UserCreate from '../pages/admin/Users/UserCreate';
// import UserEdit from '../pages/admin/Users/UserEdit';
// import ContentList from '../pages/admin/Content/ContentList';
// import ContentCreate from '../pages/admin/Content/ContentCreate';
// import ContentEdit from '../pages/admin/Content/ContentEdit';
// import Settings from '../pages/admin/Settings/Settings';

const AdminRoutes = () => {
    return (
        <Routes>
            {/* Public admin route */}
            <Route path="login" element={<Login />} />

            {/* Protected admin routes */}
            <Route element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />

                    {/* User Management */}
                    {/* <Route path="users" element={<UserList />} />
                    <Route path="users/create" element={<UserCreate />} />
                    <Route path="users/:id/edit" element={<UserEdit />} /> */}

                    {/* Content Management */}
                    {/* <Route path="content" element={<ContentList />} />
                    <Route path="content/create" element={<ContentCreate />} />
                    <Route path="content/:id/edit" element={<ContentEdit />} /> */}

                    {/* Settings */}
                    {/* <Route path="settings" element={<Settings />} /> */}
                </Route>
            </Route>
        </Routes>
    );
};

export default AdminRoutes;