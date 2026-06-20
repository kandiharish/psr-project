import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DonateModal from '../ui/DonateModal';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <DonateModal />
    </div>
  );
};

export default Layout;
