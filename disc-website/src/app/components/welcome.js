'use client'

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import './welcome.css';

function Welcome() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen((window.innerHeight < 600 || window.innerWidth < 700)); // Adjust the threshold as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="welcome-page">
      {/* Content for the left column */}
      <div className="left-column" style={{ justifyContent: "center" }}>
        <Typography variant="h2" noWrap sx={{fontFamily: 'DM Sans, sans-serif', fontSize: '2.5rem', fontWeight: '510'}} className="welcome-message-p1">
          WELCOME TO
        </Typography>
        {!isSmallScreen && (
          <Typography variant="h2" noWrap sx={{fontFamily: 'DM Sans, sans-serif', fontSize: '2.5rem', fontWeight: '510'}} className="welcome-message-p2">
            DISC NU
          </Typography>
        )}
        <Typography variant="h3" sx={{fontFamily: 'DM Sans, sans-serif', fontSize: '2.5rem'}} className={`${isSmallScreen ? 'welcome-message-p2 small-screen-p2' : 'welcome-message-p3'}`}>
          {!isSmallScreen ? (
            <>
              A Northwestern University <br /> community dedicated to <br /> Designing & Innovating for <br />Social Change
              <div className='flex space-x-4' style={{ justifyContent: "center", padding: '20px' }}>
                <a href="https://www.facebook.com/discNU/">
                  <img class= 'icon-gallery' src= 'Facebook.png'/>
                </a>
                <a href="https://www.instagram.com/disc_nu/">
                  <img class= 'icon-gallery' src= 'Instagram.png'/>
                </a>
                <a href="https://www.linkedin.com/company/northwestern-develop-innovation-for-social-change-disc/">
                  <img class= 'icon-gallery' src= 'LinkedIn.png'/>
                </a>
                <a href="https://github.com/DISC-NU" >
                  <img class= 'icon-gallery' src= 'Github.png'/>
                </a>
                <a href="mailto:disc@u.northwestern.edu">
                  <img class= 'icon-gallery' src='Email.png'/>
                </a>
              </div>
            </>
          ) : (
            "DISC NU"
          )}
        </Typography>
      </div>

      {/* Content for the right column */}
      <div className="right-column" style={{ justifyContent: "center" }}>
        <img src="disc logo.png" className={`welcome-logo ${isSmallScreen ? 'small-logo' : ''}`} alt="Logo" />
      </div>
    </div>
  );
}

export default Welcome;
