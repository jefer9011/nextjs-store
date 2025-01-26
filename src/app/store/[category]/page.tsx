interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category(props: CategoryProps) {
    const { category } = props.params;
  console.log("props", props);
  return <h1>Page Dynamic Category for: {category}</h1>;
}
