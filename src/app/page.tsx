import { Description } from "app/components/home/Description";
import { MainProducts } from "app/components/home/MainProducts";
import { Hero } from "app/components/home/Hero";
export default function Home() {
  return (
    <div>
      <main>
        <Hero></Hero>
        <Description></Description>{""}
        <MainProducts></MainProducts>
      </main>
    </div>
  );
}
