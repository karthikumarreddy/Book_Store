import React from "react";
import { BackDrop, Popup } from "../styles/Model.styles";
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
        <p>
          <span>The {prop.title} has been added to your cart. </span>
        </p>
        <button
          onClick={() => {
            navigate(`/cart`);
          }}
        >
          View Cart
        </button>
        <button onClick={onClose}>Continue Shopping </button>
      </Popup>
    </BackDrop>
  );
}

export default Model;
