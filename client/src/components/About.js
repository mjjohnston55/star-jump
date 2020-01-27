import React from "react";
import "../App.css"
// import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 about"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ante auctor elit placerat, at facilisis ex ullamcorper. Morbi venenatis velit eu enim consectetur pellentesque. Etiam viverra erat at tempus finibus. Pellentesque semper, sapien id posuere commodo, ex leo pharetra felis, et fringilla orci augue eu quam. Sed semper massa a ipsum convallis euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sem massa, sodales at nunc et, pharetra facilisis diam. Aenean a felis non sem finibus imperdiet vitae nec magna.</p></div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
