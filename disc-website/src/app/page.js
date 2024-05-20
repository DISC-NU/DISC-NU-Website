'use client';

import React, { useRef } from 'react';
import ResponsiveNavBar from './components/navbar.js'
import PastProjects from './components/past-projects.js';
import Faq from './components/faq'
import Footer from './components/footer'; 
import Emailus from './components/emailus';
import Welcome from './components/welcome';
import What_we_do from './components/what-we-do.js';
import WhoWeAre from './components/who-we-are.js';

export default function Home() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Map section ids to their respective refs
  const sections = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <div>
      {/* Pass the sections object to the ResponsiveNavBar */}
      <ResponsiveNavBar sections={sections} />

      {/* Assign refs to each section and set their ids */}
       <div ref={homeRef} id="home">
        <Welcome />
      </div>
      <div ref={aboutRef} id="about">
        <WhoWeAre />
        <What_we_do />
      </div>
      <div ref={projectsRef} id="projects">
        <PastProjects />
      </div>
      <div> <Faq /> </div>
      <div ref={contactRef} id="contact">
        <Emailus />
        <Footer />
      </div>
    </div>

  );
}