import React, { Component } from 'react';
import '../styles/App.css';
import { NavLink } from 'react-router-dom'


export default class BaseLayout extends Component {
  render(){
    return (
<div className="container">
  <nav className="navbar">
            <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/portfolio">Portfolio</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/references">References</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink>
  </nav>
{this.props.children}
<footer className="footer">
  <p className="footer-title">Copyright 2017</p>
</footer>
</div>

  )}}
