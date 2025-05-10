import Image from "next/image";
import { notFound } from "next/navigation";
import CarouselContainer from "./component/carousel/carousel";
import ProductSection from "./component/productSection/ProductSection";
import Guarantees from "./component/Guarantees/Guarantees";
import AboutUs from "./component/AboutUs/AboutUs";
import ReachUs from "./component/ReachUs/ReachUs";
import Footer from "./component/footer/footer";
import { Row } from "react-bootstrap";
import Advert from "./component/UI/Advert";
import SiderBar from "./component/SideBar/SideBar";

export default async function Home() {
  // const data = await fetch('https://fakestoreapi.com/products/0')

  // if(!data.ok || data.status >= 500){
  //   notFound()
  // }

  
  // const Product = await data.json()

  return (
    <div>
      <Row style={{padding:'5px 20px'}}>
        <SiderBar />
        <CarouselContainer />
        <Advert />
      </Row>
      <ProductSection title="Hot's Product" />
      <ProductSection title="New Product" />
      <ProductSection title="Categories" />
      <Guarantees />
      <AboutUs />
      <ReachUs />
      <Footer />

      {/* <p>{Product.description}</p> */}
    </div>
  );
}
