import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

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
        <span
          ref={dashboardRef}
          className={activeItem === 'Dashboard' ? 'active' : ''}
          onClick={() => setActiveItem('Dashboard')}
        >
          Dashboard
        </span>
        <span
          ref={menuRef}
          className={activeItem === 'Menu' ? 'active' : ''}
          onClick={() => setActiveItem('Menu')}
        >
          Menu
        </span>
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
