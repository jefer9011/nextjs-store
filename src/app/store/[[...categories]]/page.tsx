interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { categories } = await props.params;
  console.log("props", props);

  console.log("category", categories);
  console.log("searchParams", props.searchParams);

  return <h1>Dynamic Category: {categories}</h1>;
}
