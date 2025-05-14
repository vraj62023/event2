'use client'; // if you are using app/ directory (Next.js 13+)

import React, { useState } from 'react';
import Link from 'next/link'; // changed here
import './navbar.css'; // assuming you are importing CSS normally

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://images.stockcake.com/public/1/7/0/17085d24-d7bc-496e-b872-11f1d0436b20_large/rocket-speeding-skyward-stockcake.jpg"
          alt="Rocket Logo"
        />
        <h1 className="extreme-3d" data-text="Rocket Riders">Rocket Riders</h1>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'bar rotate1' : 'bar'}></span>
        <span className={menuOpen ? 'bar fade' : 'bar'}></span>
        <span className={menuOpen ? 'bar rotate2' : 'bar'}></span>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/timeline" onClick={() => setMenuOpen(false)}>Event Timeline</Link>
        <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
        <Link href="/team" onClick={() => setMenuOpen(false)}>Teams</Link>
      </div>
    </nav>
  );
};

export default Navbar;
