interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { categories } = await props.params;
  return <h1>Dynamic Category: {categories}</h1>;
}
