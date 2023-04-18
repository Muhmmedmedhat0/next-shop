import React from "react";
import { useContext } from "react";
import NewsLetter from "../../../components/news-letter/news-letter";
import Footer from "../../../components/footer/footer";
import Checkout from "../../../components/cart/checkout";

function Cart() {
  return (
    <div>
			<Checkout />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Cart;
