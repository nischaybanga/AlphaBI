import React from "react";
import "./Card.css";

const defaultImage =
  "https://media1.giphy.com/avatars/monstercat/2yTCNcDcjmBu.png";

//1 image
const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.image.user ? props.image?.user?.avatar_url : defaultImage}
        title={props.image.title}
        alt={props.image.title}
        width="350"
        height="250"
      />
      <div className="description">
        <p>{props.image?.user?.display_name}</p>
        <span>
          @{props.image.username ? props.image.username : props.image.type}
        </span>
      </div>
    </div>
  );
};

export default Card;
