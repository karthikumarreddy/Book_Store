import "./App.css";

import { Routers } from "./Components/Routers";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Routers />
      </CartProvider>
    </>
  );
}

export default App;
