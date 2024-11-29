import React, { useEffect, useState } from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const theme = useTheme();

  // Update active section on scroll or hash change
  useEffect(() => {
    const handleScroll = () => {
      const currentHash = window.location.hash || '#about'; // Default to #about
      setActiveSection(currentHash);
    };

    handleScroll(); // Initialize on load
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo  href="#about">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Siyam Ahmed</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          {/* Use activeSection to dynamically set active class */}
          <NavLink href="#about" className={activeSection === '#about' ? 'active' : ''}>
            About
          </NavLink>
          <NavLink href="#skills" className={activeSection === '#skills' ? 'active' : ''}>
            Skills
          </NavLink>
          <NavLink href="#experience" className={activeSection === '#experience' ? 'active' : ''}>
            Experience
          </NavLink>
          <NavLink href="#projects" className={activeSection === '#projects' ? 'active' : ''}>
            Projects
          </NavLink>
          <NavLink href="#education" className={activeSection === '#education' ? 'active' : ''}>
            Education
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: theme.primary,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
