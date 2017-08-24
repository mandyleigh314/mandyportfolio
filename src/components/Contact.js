import React, { Component } from 'react';
import '../styles/App.css';
import pigeon from '../imgs/carrier-pigeon.jpg'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <p>My preferred method of contact is smoke signals and carrier pigeons, but I also accept emails.</p>
        <img id="img1" src={pigeon} alt="" />
      </div>
    )
  }
}
