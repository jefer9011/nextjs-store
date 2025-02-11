import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";
import styles from './layout.module.sass'
import { Suspense } from 'react'

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections: { id: string; handle: string; title: string }[] = await getCollections();
  
  return (
    <main>
      <nav className={styles.nav}>
        {collections.map((collection) => (
          <Link 
            key={collection.id} 
            href={`/store/${collection.handle}`}
          >
            {collection.title}
          </Link>
        ))}
      </nav>
      <Suspense fallback={<div>Loading products...</div>}>
        {children}
      </Suspense>
    </main>
  );
}