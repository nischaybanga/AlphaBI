import React from "react";
import "./Card.css";

const defaultImage = [
  "https://media0.giphy.com/channel_assets/southparkgifs/Yxjwn4anI9bQ.jpg",
  "https://media2.giphy.com/avatars/docpop/Au3o7YNhWaLj.gif",
  "https://media3.giphy.com/avatars/chelseablecha/Y22EwdCfMZAF.JPG",
  "https://media1.giphy.com/avatars/monstercat/2yTCNcDcjmBu.png",
];

//1 image
const Card = ({ image }) => {
  return (
    <div className="card">
      <img
        src={
          image.user
            ? image?.user?.avatar_url
            : defaultImage[Math.floor(Math.random() * 4)]
        }
        title={image.title}
        alt={image.title}
        width="350"
        height="250"
      />
      <div className="description">
        <p>{image?.user?.display_name}</p>
        <span>{image.source_tld ? image.source_tld : image.type}</span>
      </div>
    </div>
  );
};

export default Card;
