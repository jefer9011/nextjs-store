import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import {
  getCollections,
  getCollectionsProducts,
} from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { categories } = await props.params;

  let products = await getProducts();

  const collections = await getCollections();

  if (!categories || categories.length === 0) {
    return <ProductsWrapper products={products}></ProductsWrapper>;
  }

  const categoryToFind = categories[categories.length - 1];
  console.log("categoryToFind:", categoryToFind);

  const selectedCollection = collections.find(
    (collection: { handle: string; id: string }) =>
      collection.handle === categoryToFind
  );

  if (selectedCollection) {
    products = await getCollectionsProducts(selectedCollection.id);
  }

  console.log("getProducts", products);

  return <ProductsWrapper products={products}></ProductsWrapper>;
}
