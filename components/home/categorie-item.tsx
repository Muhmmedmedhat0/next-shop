import React from "react";
import { CategorieItemProps } from "../../Types/app-props.types";

import classes from "./categorieItem.module.scss";
import Image from "next/image";
import { imageLoader } from "../../helpers/image-loader";

function CategorieItem({ category }: CategorieItemProps) {
  return (
    <div>
      <div className={classes.container}>
        <Image src={category.img} alt={category.title} className={classes.img} width={500} height={500} loader={imageLoader} unoptimized/>
        <div className={classes.info}>
          <h1 className={classes.title}>{category.title}</h1>
          <button className={classes.button}>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default CategorieItem;
