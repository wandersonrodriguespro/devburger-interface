import PropTypes from "prop-types";
import { CardImage, Container } from "./style";
import { CartButton } from "../CartButton";

export function CardProduct({ product }) {
  return (
    <Container>
      <CardImage src={product.url} alt={product.name}/>
    <div>
      <p>{product.name}</p>
      <strong>{product.currencyValue}</strong>
    </div>
    <CartButton/>
    </Container>
  );
}

CardProduct.propType = {
  product: PropTypes.object,
};
