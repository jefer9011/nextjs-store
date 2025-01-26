const getProducts = async () => {

  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-01/products.json`,
    {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || "",
      },
    }
  );

  const data = await response.json();

  return data;
};

export const MainProducts = async () => {
    const products = await getProducts();

    console.log('products', products);
    
  return (
    <div>
      <h3>Main Products</h3>
    </div>
  );
};
