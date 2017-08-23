import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom'


export default class BaseLayout extends Component {
  render(){
    return (
<div className="container">
  <nav className="navbar">
        <ul className="navbarul">
          <li className="navi">
            <Link to="/">Home</Link>
          </li>
          <li className="navi">
              <Link to="/about">About</Link>
          </li>
          <li className="navi">
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
  </nav>
{this.props.children}
<footer className="footer">
  <p className="footer-title">Copyright 2017</p>
</footer>
</div>

  )}}
