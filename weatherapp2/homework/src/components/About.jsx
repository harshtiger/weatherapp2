
import React from "react";
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
    return (
      <div className="aboutContainer">
        <div className="aboutCard">
        <Link to="/">
        <div id="closeIcon" className="row">
        <button className="xbutton">X</button>
        </div>
        </Link>
          <h2>About</h2>
          <p ><strong>Hello there! I am Samuel Centeno</strong>. I'm a Fullstack Web Developer <strong>This is a simple Weather app created during my Henry's bootcamp course</strong> Simple yet pretty useful app</p>
        </div>
      </div>
    );
  };