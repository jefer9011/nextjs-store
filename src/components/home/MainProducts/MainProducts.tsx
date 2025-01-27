import Image from "next/image";
import styles from "./MainProducts.module.sass"; // Adjust the path as necessary

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-01/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );

    const { products } = await response.json();

    return products;
  } catch (error) {
    console.log(error);
  }
};

export const MainProducts = async () => {
  const products = await getProducts();

  console.log("products", products);

  return (
    <section className={styles.MainProducts}>
      <h3>¡Discover new products!</h3>
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
