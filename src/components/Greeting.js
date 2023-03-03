import React from "react";
import { ReactDOM } from "react";
import "../App.css";


const Greeting = () => {
  let curDate = new Date(2023, 3, 2, 10);
  // console.log(date);
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curDate > 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "Green";
  } else if (curDate >= 12 && curDate < 20) {
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "Black";
  }
  return (
    <div className="container">
      <h2>
        Hello @All<span style={cssStyle}> {greeting}</span>
      </h2>
    </div>
  );
};

export default Greeting;
