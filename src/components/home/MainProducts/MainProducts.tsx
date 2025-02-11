import Image from "next/image";
import styles from "./MainProducts.module.sass";
import { getProducts } from "app/services/shopify/products";


export const MainProducts = async () => {
  const response = await fetch('http://localhost:3000/api');
  const {products} = await response.json();
  console.log('internal products', products);
  
  return (
    <section className={styles.MainProducts}>
      <h3>✨ Discover new products ✨</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map(
          (product: {
            id: string;
            title: string;
            images: { src: string }[];
          }) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id}>
                <p>{product.title}</p>
                <Image
                  src={imageSrc}
                  fill
                  alt={product.title}
                  loading="eager"
                ></Image>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
