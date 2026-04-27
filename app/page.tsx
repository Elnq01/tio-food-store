// import Image from "next/image";
// import { notFound } from "next/navigation";
import CarouselContainer from "./component/carousel/carousel";
import ProductSection from "./component/productSection/ProductSection";
import Guarantees from "./component/Guarantees/Guarantees";
import AboutUs from "./component/AboutUs/AboutUs";
import ReachUs from "./component/ReachUs/ReachUs";
// import Footer from "./component/footer/footer";
import { Row } from "react-bootstrap";
import Advert from "./component/UI/Advert";
import SiderBar from "./component/SideBar/SideBar";
import CategorySection from "./component/CategorySection/CategorySection";
import PageCss from "./layout.module.css";
import GroceryCarousel from "./component/carousel/GroceryCarousel";
import SupermarketScene from "./component/Supermarket/SupermarketScene";

export default async function Home() {
  // const data = await fetch('https://fakestoreapi.com/products/0')

  // if(!data.ok || data.status >= 500){
  //   notFound()
  // }

  
  // const Product = await data.json()

  return (
    <div>
      <Row className={PageCss.cont} >
        {/*<SiderBar />*/}
        {/*<CarouselContainer />*/}
        {/*<Advert />*/}
        <GroceryCarousel />
      </Row>
      {/* <SupermarketScene /> */}
      <ProductSection title="HOT'S PRODUCT" />
      <ProductSection title="NEW PRODUCT" />
      <CategorySection title="CATEGORIES" />
      <Guarantees />
      {/* <AboutUs /> */}
      <ReachUs />

      {/* <p>{Product.description}</p> */}
    </div>
  );
}
