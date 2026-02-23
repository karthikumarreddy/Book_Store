import {
  Button,
  Card,
  Display,
  Display2,
  Heading3,
  Image,
} from "../styles/CartCard.styles";

function CartCard({ props, onChange }) {
  return (
    <Card>
      <Display2>
        <Image src={props.image} alt="" />
        <Display>
          <h3>{props.title}</h3>
          <Heading3>₹ {props.price}</Heading3>
        </Display>
      </Display2>
      <Button onClick={() => onChange()}>Remove</Button>
    </Card>
  );
}

export { CartCard };
