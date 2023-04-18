import React from "react";
import { useContext } from "react";
import Image from "next/image";
import { CartContext } from "../../contexts/cart-context";
import StripeCheckout from "react-stripe-checkout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import classes from "./checkout.module.scss";
import { imageLoader } from "../../helpers/image-loader";
function Checkout() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };
  const subtotalPrice = cartItems.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.quantity,
    0
  );
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>YOUR BAG</h1>
      <div className={classes.top}>
        <button
          style={{ backgroundColor: "transparent", color: "black" }}
          className={classes.topButton}>
          CONTINUE SHOPPING
        </button>
        <div className={classes.topTexts}>
          <span className={classes.topText}>Shopping Bag(2)</span>
          <span className={classes.topText}>Your Wishlist (0)</span>
        </div>
        {/* <StripeCheckout
          name="E-Commerce"
          image="https://img.freepik.com/free-vector/supermarket-logo-concept_23-2148467758.jpg?w=740&t=st=1659300159~exp=1659300759~hmac=75c6925c2fe434a8d477161f0cac8b5b8eeae3680a66178d4cb78f5c15ad95b4"
          billingAddress
          shippingAddress
          description={` your total price is ${props.cart.totalPrice}`}
          amount={props.cart.totalPrice * 100}
          token={props.onToken}
          stripeKey={props.stripeKey}>
        </StripeCheckout> */}
        <button
          style={{ border: "none", backgroundColor: "black", color: "white" }}
          className={classes.topButton}>
          CHECKOUT NOW
        </button>
      </div>
      <div className={classes.bottom}>
        <div className={classes.info}>
          {/* start second Product */}
          {cartItems.length === 0 ? (
            <h1 style={{ textAlign: "center", color: "red" }}>
              Nothing in the cart yet
            </h1>
          ) : (
            cartItems.map((product) => (
              <div className={classes.product} key={product.id}>
                <div className={classes.productDetails}>
                  <Image
                    className={classes.productImage}
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    loader={imageLoader}
                    unoptimized
                  />
                  <div className={classes.details}>
                    <span className={classes.productName}>
                      <b>Product:</b> {product.title}
                    </span>
                    <span className={classes.ProductId}>
                      <b>ID:</b> {product.id}
                    </span>
                  </div>
                </div>
                <div className={classes.pricetDetails}>
                  <div className={classes.productAmountContainer}>
                    <RemoveIcon
                      className={classes.icon}
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity - 1)
                      }
                    />
                    <span className={classes.amount}>{product.quantity}</span>
                    <AddIcon
                      className={classes.icon}
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity + 1)
                      }
                    />
                  </div>
                  <span className={classes.productPrice}>
                    <b>${(product.price * product.quantity).toFixed(2)}</b>
                  </span>
                </div>
              </div>
            ))
          )}
          {/* end OF Product */}
        </div>
        {/* start summery */}
        <div className={classes.summery}>
          <h1 className={classes.summeryTitle}>ORDER SUMMARY</h1>
          <div className={classes.summeryItem}>
            <span className={classes.summeryText}>Subtotal</span>
            <span className={classes.summeryPrice}>
              $ {subtotalPrice.toFixed(2)}
            </span>
          </div>
          <div className={classes.summeryItem}>
            <span className={classes.summeryText}>Estimated Shipping</span>
            <span className={classes.summeryPrice}>$ 5.90</span>
          </div>
          <div className={classes.summeryItem}>
            <span className={classes.summeryText}>Shipping Discount</span>
            <span className={classes.summeryPrice}>$ -5.90</span>
          </div>
          <div className={classes.summeryItem}>
            <span className={(classes.summeryText, classes.summeryTotal)}>
              Total
            </span>
            <span className={classes.summeryPrice}>
              $ {subtotalPrice.toFixed(2)}
            </span>
          </div>
          {/* <StripeCheckout
            name="E-Commerce"
            image="https://img.freepik.com/free-vector/supermarket-logo-concept_23-2148467758.jpg?w=740&t=st=1659300159~exp=1659300759~hmac=75c6925c2fe434a8d477161f0cac8b5b8eeae3680a66178d4cb78f5c15ad95b4"
            billingAddress
            shippingAddress
            description={` your total price is ${props.cart.totalPrice}`}
            amount={props.cart.totalPrice * 100}
            stripeKey={props.stripeKey}
            token={props.onToken}>
          </StripeCheckout> */}
          <button className={classes.checkNow}>CHECKOUT NOW</button>
        </div>
        {/* end summery */}
      </div>
    </div>
  );
}

export default Checkout;
