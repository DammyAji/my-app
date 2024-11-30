// src/components/Layout.js
import React from 'react';
import Header from './Header';   // Ensure Header is imported correctly
import Footer from './Footer';   // Import Footer if necessary

function Layout({ children }) {
  return (
    <div>
      <Header />   {/* Render the Header here */}
      <main>
        {children} {/* This will render the rest of the page content */}
      </main>
      <Footer />
      </div>
  )
}

export default Layout;
