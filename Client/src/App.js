import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';
import Body from './Body';
import Par from './Par';
import User from './User';

function App() {
  return (
    <Router>
      <Navbar /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/user" element={<User />} />
        <Route path="/par" element={<Par />} />
      </Routes>
    </Router>
  );
}

export default App;
