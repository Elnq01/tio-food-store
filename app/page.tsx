import Image from "next/image";
import { notFound } from "next/navigation";
import CarouselContainer from "./component/carousel/carousel";
import ProductSection from "./component/productSection/ProductSection";
import Guarantees from "./component/Guarantees/Guarantees";
import AboutUs from "./component/AboutUs/AboutUs";

export default async function Home() {
  // const data = await fetch('https://fakestoreapi.com/products/0')

  // if(!data.ok || data.status >= 500){
  //   notFound()
  // }

  
  // const Product = await data.json()

  return (
    <div>
      <CarouselContainer />
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <Guarantees />
      <AboutUs />

      {/* <p>{Product.description}</p> */}
    </div>
  );
}
