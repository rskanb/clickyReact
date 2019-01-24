import React from "react";
import "../styles/Card.css";


function Card(props) {
  return (
  <div className="card">
      <img className="img-container" alt={props.name} src={props.image} id={props.id} 
      onClick={() => props.clickCount(props.id)}></img>
  </div>
  );
}

export default Card;
