import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';


const Layout = ({children}) => (
  <>
    <TopBar />
      {children}
    <Footer />
  </>
);

export default Layout;
