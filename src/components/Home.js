import React, { Component } from 'react';
import '../styles/App.css';
import img1 from '../imgs/display1.jpg'
import img2 from '../imgs/display3.jpg'
import img3 from '../imgs/display2.jpg'
import img4 from '../imgs/display4.jpg'

export default class Home extends Component {
  render() {
    return (
      <div id="homecontent">
        <h3 id="homeHeader">I like to knit weird hats.</h3>
        <div className="col-sm-6" id="hometext">
        <p>I take inspiration from the world around me and convert it into hats. I especially take inspiration from cheese.</p>
        <p>I love cheese, especially cottage cheese caerphilly. Cream cheese fromage frais cheese slices blue castello everyone loves dolcelatte fromage frais fromage frais. Red leicester st. agur blue cheese boursin dolcelatte paneer taleggio babybel red leicester. Swiss cow cheese slices cheddar stinking bishop croque monsieur fromage goat. Paneer edam port-salut cheesy feet.</p>
        <p>Fromage port-salut smelly cheese. Swiss feta hard cheese edam gouda fromage bavarian bergkase pepper jack. Dolcelatte swiss who moved my cheese cheese slices caerphilly hard cheese blue castello taleggio. Cheese slices taleggio.</p>
      </div>
      <div className="homepics">
      <img id="img1" src={img2} alt="" />
      <img id="img1" src={img1} alt="" />
      <img id="img1" src={img3} alt="" />
      <img id="img1" src={img4} alt="" />
    </div>
      </div>
    )
  }
}
