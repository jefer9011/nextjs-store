import styles from "./Description.module.sass";
import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "../../../../config/images";

export const Description = () => {
  return (
    <section className={styles.description}>
      <div className={styles.description__imageContainer}>
        <Image
          src="/images/description.jpg"
          alt="Products marketplace"
          fill
          placeholder="blur"
          blurDataURL={PLACEHOLDER_IMAGE}
        />
      </div>
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
