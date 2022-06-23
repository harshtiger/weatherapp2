
import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import '../containers/App.css';

var style = {
    backgroundImage: "linear-gradient(to right, #343a40, #343a40)",
    // borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    minHeight: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

export default function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <span className="footertext">created by <a href="https://www.github.com/harshtiger" target="blank" className="footerlinks">Samuel Centeno</a></span>
                <Link to="/about">
                <span className=" footerlinks"> About</span>
                </Link>
            </div>
        </div>
    )
}