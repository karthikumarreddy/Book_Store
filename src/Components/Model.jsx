import React from "react";
import { BackDrop, Button, Cover, Popup } from "../styles/Model.styles";
import { useNavigate } from "react-router-dom";

function Model({ prop, onClose }) {
  const navigate = useNavigate();
  return (
    <BackDrop onClick={onClose}>
      <Popup
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1>Added to Cart</h1>
        <p>
          <b>{prop.title} </b>has been added to your cart.
        </p>
        <Cover>
          <Button
            onClick={() => {
              navigate(`/cart`);
            }}
          >
            View Cart
          </Button>
          <Button onClick={onClose}>Continue Shopping </Button>
        </Cover>
      </Popup>
    </BackDrop>
  );
}

export default Model;
