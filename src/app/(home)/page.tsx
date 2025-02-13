import { MainProducts } from "app/components/home/MainProducts";

export const metadata: Metadata = {
  title: "Future World",
  description: "Ecommerce from the future",
  keywords: ['Ecommerce', 'world', 'tech'],
}

export default function Home() {
  return (
    <div>
      <main>
        <MainProducts></MainProducts>
      </main>
    </div>
  );
}
