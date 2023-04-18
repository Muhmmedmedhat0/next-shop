import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Product } from '../../Types/app-props.types';
import { imageLoader } from '../../helpers/image-loader';

import classes from "./product-item.module.scss";

function Productitem({ product }: { product: Product }) {
	return (
    <div className={classes.container}>
      <div className={classes.circle}></div>
			<Image src={product.image} alt={product.title} className={classes.img} width={200} height={200} loader={imageLoader} unoptimized
      />
      <div className={classes.info}>
        <div className={classes.icon}>
          <AddShoppingCartIcon />
        </div>
        <Link href={`/products/${product.id}`}>
          <div className={classes.icon}>
            <SearchIcon />
          </div>
        </Link>
        <div className={classes.icon}>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
}

export default Productitem;

