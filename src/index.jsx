import React from "react";
import ReactDOM from "react-dom";

const name="Anu";
const fname="Anubargavi";
const lname="A"

const num = 3;

ReactDOM.render(<div>
  <h1>Hello {name}!!!...</h1>
  <h1>Hi {fname +" " + lname}</h1>
  <p>Your lucky number is {num}</p>
  <h1>Hi {`${fname} ${lname}`}</h1>                  
  <p>Random number is {Math.floor(Math.random()* 10)}</p>
  <h1>Hello World!</h1>
    <p>My favourite food items.</p>
    <h1>List of Food items.</h1>
    <ul>
      <li>Chicken Biriyani</li>
      <li>Egg rice</li>
      <li>Veg Biriyani</li>
    </ul>

  </div>,
  document.getElementById("root"));


  // <h1>Hi {`${fname} ${lname}`}</h1>    ES6 METHOD
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
