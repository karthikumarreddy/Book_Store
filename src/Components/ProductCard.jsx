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

function ProductCard({ props }) {
  const navigate = useNavigate();
  return (
    <div>
      <Card>
        {props.price > 240 && <Premiun>premium</Premiun>}
        <ProductName>{props.title}</ProductName>
        <ProductAuthor>{props.author}</ProductAuthor>
        <ProductImg src={props.image} />
        <ProductPrice>₹{props.price}</ProductPrice>

        <DisplayButton>
          <Button onClick={() => navigate(`/books/${props.id}`)}>
            View Details
          </Button>
          <Button>Add to Cart</Button>
        </DisplayButton>
      </Card>
    </div>
  );
}
export { ProductCard };
