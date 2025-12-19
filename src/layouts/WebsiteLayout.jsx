// src/layouts/WebsiteLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/website/Header';
import Footer from '../components/website/Footer';

const WebsiteLayout = () => {
  return (
    <div className="website-layout">
     
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;