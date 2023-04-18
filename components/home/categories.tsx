import React from "react";
import { categories } from "../../data";
import CategorieItem from "./categorie-item";
import { CategoryItem } from "../../Types/app-props.types";

import classes from "./categories.module.scss";

function Categories() {
  return (
    <section>
      <div className={classes.latest}>
        <h1>Main Categories</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={classes.container}>
        {categories.map((item: CategoryItem) => (
          <CategorieItem category={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
