import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [highlightStyle, setHighlightStyle] = useState({});
  const dashboardRef = useRef(null);
  const menuRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    const refs = {
      Dashboard: dashboardRef,
      Menu: menuRef,
      Settings: settingsRef,
    };
    const currentRef = refs[activeItem];
    if (currentRef.current) {
      const { offsetLeft, offsetWidth } = currentRef.current;
      setHighlightStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeItem]);

  return (
    <div className="navbar">
      <div className="logo">Restro Thattukada</div>
      <div className="nav">
        <div className="highlight" style={highlightStyle}></div>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <span
          ref={dashboardRef}
          className={activeItem === 'Dashboard' ? 'active' : ''}
          onClick={() => setActiveItem('Dashboard')}
        >
          Dashboard
        </span>
        </Link>
        <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span
            ref={menuRef}
            className={activeItem === 'Menu' ? 'active' : ''}
            onClick={() => setActiveItem('Menu')}
          >
            Menu
          </span>
        </Link>

        <span
          ref={settingsRef}
          className={activeItem === 'Settings' ? 'active' : ''}
          onClick={() => setActiveItem('Settings')}
        >
          Settings
        </span>
      </div>
    </div>
  );
}

export default Navbar;
