import React from 'react';
import { NavLink } from "react-router-dom";
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>🍽 Feed me</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li><NavLink to="/">Browse restaurants</NavLink></li>
        <li><NavLink to="/">Surprise me</NavLink></li>
        <li><NavLink to="/MyAccount">My Account</NavLink></li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
