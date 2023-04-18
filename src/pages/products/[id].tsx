import React, { useContext, useState } from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Product } from "../../../Types/app-props.types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { imageLoader } from "../../../helpers/image-loader";
import NewsLetter from "../../../components/news-letter/news-letter";
import Footer from "../../../components/footer/footer";
import { CartContext } from "../../../contexts/cart-context";

import classes from "../../styles/product-id.module.scss";

function ProductPage({ product }: { product: Product }) {
  const { cartItems, addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setQuantity(0); // Update state of quantity
    } else {
      setQuantity(newQuantity); // Update state of quantity
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const subtotalPrice = cartItems.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.quantity,
    0
  );

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.imgContainer}>
          <Image src={product.image} alt={product.title} className={classes.Image} width={300} height={300} loader={imageLoader} unoptimized priority />
        </div>
        <div className={classes.infoContainer}>
          <h1 className={classes.infoTitle}>{product.title}</h1>
          <div className={classes.filter}>
            <div className={classes.filterTitle}>
              <div>{product.category}</div>
              <div>avaliableity {product.rating.count}</div>
            </div>
          </div>
          <div className={classes.infoDescription}>{product.description}</div>
          <p className={classes.infoPrice}>{product.price} $</p>
          <div className={classes.addToCart}>
            <div className={classes.amountContainer}>
              <AddIcon className={classes.icon} onClick={() => handleQuantityChange(product.id, quantity + 1)} />
              <span className={classes.amount}>{quantity}</span>
              <RemoveIcon className={classes.icon} onClick={() => handleQuantityChange(product.id, quantity - 1)} />
            </div>
            <button className={classes.addToCartButton} onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default ProductPage;

// 1- getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!data) {
      throw new Error("Invalid response format: data not found");
    }

    const product_id = data.map((product: Product) => product.id);
    return {
      paths: [{ params: { id: String(product_id) } }],
      fallback: "blocking",
    };
  } catch (error) {
    console.error(error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

// 2- getStaticProps
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string;
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    const product = await response.json();
    if (!product) {
      throw new Error("Invalid response format: data not found");
    }
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};