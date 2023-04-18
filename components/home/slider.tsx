import React, { useState } from "react";

import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../../data";
import Image from "next/image";
import { imageLoader } from "../../helpers/image-loader";

import classes from "./slider.module.scss";

function Slider() {
  const [slideindex, setSlideIndex] = useState(1);

  function handleClick(direction: string) {
    if (direction === "left") {
      setSlideIndex(slideindex > 0 ? slideindex - 1 : 2);
    }

    if (direction === "right") {
      setSlideIndex(slideindex < 2 ? slideindex + 1 : 0);
    }
  }
  return (
    <section className={classes.container}>
      <div
        className={`${classes.arrow} ${classes.left}`}
        onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </div>
      <div
        className={classes.wrapper}
        slideindex={slideindex}
        style={{transform: `translateX(${slideindex * -100}vw)`}}>
        {sliderItems.map((item) => (
          <div
            className={classes.slide}
            key={item.id}
            style={{ backgroundColor: `${item.bg}` }}>
            <div className={classes.img_container}>
              <Image className={classes.Image} src={item.img} alt={item.title} width={600} loader={imageLoader} unoptimized
          height={900}/>
            </div>
            <div className={classes.info}>
              <h1 className={classes.title}>{item.title}</h1>
              <div className={classes.description}>{item.desc}</div>
              <button className={classes.button}>
                <Link href="#">SHOP NOW</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${classes.arrow} ${classes.right}`}
        onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </div>
    </section>
  );
}

export default Slider;
