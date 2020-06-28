import React, { Component } from "react";


export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav" id="navbar">
            <div className="nav-content">
            
            <ul className="nav-items">
            <li className="nav-item">Header</li>
            <li className="nav-item">Resume</li>
            <li className="nav-item">Portfolio</li>
            <li className="nav-item">DiagramWidget</li>
            <li className="nav-item">ContactUs</li>
            </ul>
            </div>
            </nav>
        );
    }
}
