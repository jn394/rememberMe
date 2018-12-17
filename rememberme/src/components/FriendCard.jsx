import React from "react";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <strong>Name:</strong> {props.name}
    </div>
  </div>
);

export default FriendCard;
