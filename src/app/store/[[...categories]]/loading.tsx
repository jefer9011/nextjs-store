import styles from './loading.module.sass'

export default function Loading() {
  
  return (
    <div className={styles.productsLoading}>
      <div className={styles.productsGrid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.productSkeleton}>
            <div className={styles.imageLoader}></div>
            <div className={styles.textLoader}></div>
            <div className={styles.priceLoader}></div>
          </div>
        ))}
      </div>
    </div>
  )
}