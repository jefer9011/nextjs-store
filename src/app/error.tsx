"use client";

import Image from "next/image";
import styles from "../sass/global-error.module.sass";


export default function GlobalError({reset}: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h2 className={styles.Error__title}>Ha ocurrido un error</h2>
      <Image
        src="/images/error_page.jpg"
        width={500}
        height={500}
        alt="Error"
      ></Image>
      <p className={styles.Errro__message}>Al parecer ha ocurrrido un error inesperado</p>
      <button className={styles.Error__button} onClick={reset}>Intenta de nuevo</button>
    </main>
  );
}
