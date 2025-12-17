// src/routes/WebsiteRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../layouts/WebsiteLayout';

// Pages
import Home from '../pages/website/Home';
// import About from '../pages/website/About';
// import Services from '../pages/website/Services';
import Contact from '../pages/website/Contact';
import NotFound from '../pages/website/NotFound';

const WebsiteRoutes = () => {
    return (
        <Routes>
            <Route element={<WebsiteLayout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                {/* <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} /> */}
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default WebsiteRoutes;