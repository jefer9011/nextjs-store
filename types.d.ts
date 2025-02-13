interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type ProductType = {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};

type CollectionType = {
  id: string,
  handle: string,
  title: string,
}

