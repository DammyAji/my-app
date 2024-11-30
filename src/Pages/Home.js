import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import CompanyOverview from '../components/CompanyOverview';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Contacts from '../components/Contacts';

function Home() {
  return (
    <Layout>
      <HeroSection />
      <CompanyOverview />
      <AboutUs />
      <Services />
      <Projects />
      <Clients />
      <Contacts />
    </Layout>
  );
}

export default Home;
