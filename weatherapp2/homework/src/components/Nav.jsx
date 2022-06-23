import React from 'react';
import { Icon } from '@iconify/react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import './About';
import './About.css';

import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">

        <Link to ='/'>
        <span className="navbar-brand">
        <Icon icon="bi:cloud-sun" />

        <div> Weather App</div>
          
        </span>
       </Link>

       

        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
