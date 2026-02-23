import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  DisplayButton,
  Premiun,
  ProductAuthor,
  ProductImg,
  ProductName,
  ProductPrice,
} from "../styles/ProductCard.styles";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Model from "./Model";

function ProductCard({ props }) {
  const { cart, addToCart } = useContext(CartContext);
  const inCart = cart.some((i) => i.id === props.id);
  const [model, setModel] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Card>
        {props.price > 240 && <Premiun>Premium</Premiun>}
        <ProductName>{props.title}</ProductName>
        <ProductAuthor>{props.author}</ProductAuthor>
        <ProductImg src={props.image} />
        <ProductPrice>₹{props.price}</ProductPrice>

        <DisplayButton>
          <Button onClick={() => navigate(`/books/${props.id}`)}>
            View Details
          </Button>
          <Button
            onClick={() => {
              addToCart(props);
              setModel(true);
            }}
            disabled={inCart}
          >
            {inCart ? "Added" : "Add to Cart"}
          </Button>
        </DisplayButton>
      </Card>

      {model && <Model prop={props} onClose={() => setModel(false)} />}
    </div>
  );
}
export { ProductCard };
