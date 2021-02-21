import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id='about'>
    <p>
      This is the page that I created myself using what I have learned in React this far. 
    </p>
    <img src={image} alt="I made this" />

  </div>);
}

export default About;
