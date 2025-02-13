import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.sass";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link
      href={`/product/${product.handle}?id=${product.id}`}
      className={styles.ProductCard__link}
    >
      <article className={styles.ProductCard}>
        <Image
          src={product.image}
          alt={product.title}
          width="320"
          height="320"
          quality={80}
          loading="eager"
        ></Image>
        <div className={styles.ProductCard__info}>
          <h3>{product.title}</h3>
        </div>
        <span className={styles.ProductCard__priceTag}>
          ${product.price} USD
        </span>
      </article>
    </Link>
  );
};
