// src/services/api/ApiRoutes.js
const ApiRoutes = {
    // Auth endpoints
    auth: {
        login: '/auth/login',
        logout: '/auth/logout',
        register: '/auth/register',
        refresh: '/auth/refresh',
        profile: '/auth/profile',
    },

    // User endpoints
    users: {
        list: '/users',
        detail: (id) => `/users/${id}`,
        create: '/users',
        update: (id) => `/users/${id}`,
        delete: (id) => `/users/${id}`,
    },

    // Content endpoints
    content: {
        list: '/content',
        detail: (id) => `/content/${id}`,
        create: '/content',
        update: (id) => `/content/${id}`,
        delete: (id) => `/content/${id}`,
        publish: (id) => `/content/${id}/publish`,
    },

    // Website endpoints
    website: {
        home: '/website/home',
        about: '/website/about',
        services: '/website/services',
        contact: '/website/contact',
    },

    // Settings endpoints
    settings: {
        general: '/settings/general',
        update: '/settings/general',
    },
};

export default ApiRoutes;