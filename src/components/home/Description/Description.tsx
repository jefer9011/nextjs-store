"use client";
import classNames from "classnames/bind";
import { useState } from "react";
import Image from "next/image";
import styles from "./Description.module.sass";
import { PLACEHOLDER_IMAGE } from "../../../../config/images";


export const Description = () => {
  const [hasBorder, setBorder] = useState(false);
  const handleClick = () => setBorder(!hasBorder);
  const cx = classNames.bind(styles);

  const btnStyles = cx("description__button", {
    "description__button--border": hasBorder,
  })
  
  return (
    <section className={styles.description}>
      <button className={btnStyles} onClick={handleClick}>
        <div className={styles.description__imageContainer}>
          <Image
            src="/images/main_banner.jpg"
            alt="Products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.content}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illum, eveniet similique repudiandae voluptas voluptatem architecto id
          placeat numquam sit laudantium veritatis rem adipisci, deleniti
          ducimus vero minus nulla voluptates.
        </p>
      </div>
    </section>
  );
};
