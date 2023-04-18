import React from "react";
import classes from "./product-list.module.scss";
import { Products } from "../../Types/app-props.types";

import Productitem from "./product-item";

function Productlist({ products }: Products) {

  return (
    <div>
      <div className={classes.latest}>
        <h1>Latest Arrival</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <section className={classes.container}>
        {products &&
          products.map((product) => (
            <Productitem product={product} key={product.id} />
          ))}
      </section>
    </div>
  );
}

export default Productlist;
