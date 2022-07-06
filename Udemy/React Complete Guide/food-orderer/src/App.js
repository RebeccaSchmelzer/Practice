import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [showCard, setShowCard] = useState(false)

  const showCardHandler = () => {
    setShowCard(true)
  }

  const hideCartHandler = () => {
    setShowCard(false)
  }

  /* 141
  141 dont render modal is falsy and render if truthy
  - pt to showcart handler bc cart is in header

  - put hidecarthandler within the cart component bc thats where we handle it
  
  */ 

  /*
    142
    - add context here since every component needs access to the cart data
  */
  return (
    <CartProvider>
      {showCard && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
