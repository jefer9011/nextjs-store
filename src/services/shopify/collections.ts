import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "",
      }),
    });

    const { smart_collections: collections } = await response.json();
    const transformedCollections = collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      };
    });
    console.log("smart collectionss", transformedCollections);

    return transformedCollections;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCollectionsProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "",
      }),
    });
    const {products} = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
