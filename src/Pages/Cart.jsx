import React, { useContext } from "react";

import { Layout } from "../Components/Layout";
import { CartContext } from "../Context/CartContext";
import { CartCard } from "../Components/CartCard";

function Cart() {
  const { cart, addToCart, removeCart } = useContext(CartContext);
  return (
    <div>
      <Layout>
        <h1>Your Shopping Cart</h1>
        <p>
          This page displays all books currently added to your cart. Items
          remain stored until they are manually removed.
        </p>
        <p>
          The cart is managed globally across the application to ensure
          consistent behavior regardless of where books are added.
        </p>
        {!cart || cart.length == 0 ? (
          <p>cart is empty</p>
        ) : (
          cart.map((b) => (
            <CartCard key={b.id} props={b} onChange={() => removeCart(b)} />
          ))
        )}
      </Layout>
    </div>
  );
}

export { Cart };
