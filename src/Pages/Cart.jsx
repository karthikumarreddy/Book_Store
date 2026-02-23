import React, { useContext } from "react";

import { Layout } from "../Components/Layout";
import { CartContext } from "../Context/CartContext";
import { CartCard } from "../Components/CartCard";
import styled from "styled-components";

function Cart() {
  const CartContainer = styled.div`
    display: flex;
    justify-contenet: center;
    align-items: center;
    flex-direction: column;
  `;

  const Container = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  `;
  const { cart, addToCart, removeCart } = useContext(CartContext);
  return (
    <div>
      <Layout>
        <Container>
          <h1>Your Shopping Cart</h1>
          <p>
            This page displays all books currently added to your cart. Items
            remain stored until they are manually <br /> removed.
          </p>
          <p>
            The cart is managed globally across the application to ensure
            consistent behavior regardless of where books <br /> are added.
          </p>
        </Container>
        <CartContainer>
          {!cart || cart.length == 0 ? (
            <p>cart is empty</p>
          ) : (
            cart.map((b) => (
              <CartCard key={b.id} props={b} onChange={() => removeCart(b)} />
            ))
          )}
        </CartContainer>
      </Layout>
    </div>
  );
}

export { Cart };
