import Image from "next/image";
import Link from "next/link";
import styles from "../sass/not-found.module.sass";

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <h1 className={styles.NotFound__title}>404</h1>
      <Image
        src="/images/404nf.jpg"
        width={500}
        height={500}
        alt="404 Not found"
      ></Image>

      <h2 className={styles.NotFound__subtitle}>
        Parece que el enlace se escondió
      </h2>
      <p className={styles.NotFound__description}>
        Pero nuestra tienda esta abierta las 24/7
      </p>
      <Link className={styles.NotFound__link} href="/store">
        !Vamos de compras¡!
      </Link>
    </main>
  );
}
