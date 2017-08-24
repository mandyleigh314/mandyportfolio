import React, { Component } from 'react';
import '../styles/App.css';
import img8 from '../imgs/customer1.jpg'

export default class References extends Component {
  render() {
    return (
      <div>
        <h3>People like my work.</h3>
        <h5>Here are some of those people.</h5>
        <img id="img2" src={img8} alt="" />
        <blockquote><p>I've definitely seen worse hats, and this one is only slightly scratchy. I would say it's 3 stars out of 7.</p>
        <h6>-A Slighty Satisfied Customer</h6>
      </blockquote>
      </div>
    )
  }
}
