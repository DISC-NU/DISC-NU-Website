'use client'

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './navbar.css'

const pages1 = ['Home', 'About', 'Contact'];
const pages2 = ['Projects', 'Resources', 'Calendar'];

const PageButton = ({ page, onClick, onClickR, scrollToSection }) => {
  const isResourcesPage = page === 'Resources';

  const handleClick = (event) => {
    if (isResourcesPage) {
      onClickR(event); // Pass the event to onClickR if it's the Resources page
    } else {
      onClick(); // Close the navigation menu
      scrollToSection(page.replace(" ", "-").toLowerCase()); // Scroll to the corresponding section
    }
  };

  return (
    <Button
      key={page}
      onClick={handleClick}
      sx={{ mx: 1, color: '#00423E', width: '10vw', textTransform: 'none', fontFamily: 'DM Sans', fontSize: '1rem' }} // Set fixed width for buttons
      endIcon={isResourcesPage ? <KeyboardArrowDownIcon /> : null}
      aria-controls={isResourcesPage ? 'resources-menu' : null}
      aria-haspopup={isResourcesPage ? 'true' : null}
      className='nav-buttons'
    >
      {page}
    </Button>
  );
};

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElResources, setAnchorElResources] = useState(null);
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenResourcesMenu = (event) => {
    setAnchorElResources(event.currentTarget);
  };

  const handleCloseResourcesMenu = () => {
    setAnchorElResources(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  //Function to handle window resize and toggle showMenuIcon state
  const handleResize = () => {
    // incase any dropdowns are open we need to close them 
    handleCloseResourcesMenu();
    handleCloseNavMenu();

    setShowMenuIcon(window.innerWidth <= 1080);
  };

  useEffect(() => {
    // Add event listener for window resize
    const debounceResize = debounce(handleResize, 100);
    window.addEventListener('resize', debounceResize);

    // Initial check for window size
    setShowMenuIcon(window.innerWidth <= 1080);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', debounceResize);
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', zIndex: '1000'}} className="custom-navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left side (pages1) */}
          <Box sx={{ flexGrow: 1, flexBasis: '35%', textAlign: 'left', display: 'flex', justifyContent: 'flex-start' }}>
            {!showMenuIcon && (
              <>
                {pages1.map((page, index) => (
                  <PageButton
                    key={index}
                    page={page}
                    onClick={handleCloseNavMenu}
                    onClickR = {handleOpenResourcesMenu}
                    anchor={anchorElNav}
                    scrollToSection={scrollToSection}
                  />
                ))}
              </>
            )}
          </Box>

          {/* Middle (Logo and Company Name) */}
          <Box sx={{ flexGrow: 1, flexBasis: '30%' }}>
            <div className="logo-container">
              <Typography variant="h6" noWrap sx={{ fontSize: '35px', overflow: "unset" }} className="company-name">
                DISC
              </Typography>
              <img src="disc logo.png" className="logo" alt="Logo" className="logo" />
              <Typography variant="h6" noWrap sx={{ fontSize: '35px', overflow: "unset" }} className="company-name">
                NU
              </Typography>
            </div>
          </Box>


          {/* Right side (pages2) */}
          <Box sx={{ flexGrow: 1, flexBasis: '35%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
            {!showMenuIcon && (
              <>
                {pages2.map((page, index) => (
                  <PageButton
                    key={index}
                    page={page}
                    onClick={handleCloseNavMenu}
                    onClickR = {handleOpenResourcesMenu}
                    anchor={anchorElNav}
                    scrollToSection={scrollToSection}
                  />
                ))}
              </>
            )}
            {showMenuIcon && (
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                className = "menu-icon"
                color="#00423E"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages1.map((page, index) => (
                <MenuItem key={index} 
                          onClick={() => { 
                              handleCloseNavMenu(); 
                              scrollToSection(page.replace(" ", "-").toLowerCase()); }}
                          sx={{ color: '#00423E', fontFamily: 'DM Sans' }}
                          className="menu-item">
                  {page}
                </MenuItem>
              ))}
              {pages2.map((page) => (
                page === 'Resources' ? (
                  <MenuItem key={page} 
                            onClick={handleOpenResourcesMenu} 
                            sx={{ color: '#00423E', fontFamily: 'DM Sans' }}
                            className="menu-item">
                    {page}
                  </MenuItem>
                ) : (
                  <MenuItem key={page} 
                            onClick={() => { 
                              handleCloseNavMenu(); 
                              scrollToSection(page.replace(" ", "-").toLowerCase()); }}
                            sx={{ color: '#00423E', fontFamily: 'DM Sans' }}
                            className="menu-item">
                    {page}
                  </MenuItem>
                )
              ))}
            </Menu>
            {/* Resources Dropdown Menu */}
            <Menu
              id="resources-menu"
              anchorEl={anchorElResources}
              anchorOrigin={{
                vertical: showMenuIcon ? 'top' : 30,
                horizontal: showMenuIcon ? -70 : 60,
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElResources)}
              onClose={handleCloseResourcesMenu}
            >
              <MenuItem onClick={() => {
                          handleCloseResourcesMenu();
                          handleCloseNavMenu();
                        }}
                        sx={{ color: '#00423E', fontFamily: 'DM Sans' }}
                        className="menu-item">
              Slides
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
