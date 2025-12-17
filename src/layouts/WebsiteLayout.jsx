// src/layouts/WebsiteLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/website/Header';
import Footer from '../components/website/Footer';

const WebsiteLayout = () => {
  return (
    <div className="website-layout">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;