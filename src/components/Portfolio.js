import React, { Component } from 'react';
import '../styles/App.css';
import img5 from '../imgs/store3.jpg'
import img6 from '../imgs/store9.jpg'
import img7 from '../imgs/store7.jpg'

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <h2>Some of My Work...</h2>
        <img id="img1" src={img5} alt="" />
        <img id="img1" src={img6} alt="" />
        <img id="img1" src={img7} alt="" />
        <p>Bacon ipsum dolor amet andouille reprehenderit aliqua sint eiusmod pork chop elit laboris velit cow adipisicing bacon aliquip beef ribs short ribs. Labore occaecat filet mignon do sirloin bresaola pork bacon dolore. Jerky boudin in magna, commodo ground round ullamco. Cillum short loin mollit tri-tip qui laboris.</p>
      </div>
    )
  }
}
