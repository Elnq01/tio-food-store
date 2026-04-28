"use client"

import Card from 'react-bootstrap/Card';
import ProductImage from '../../../public/king-500x500.jpg';
import { Col } from 'react-bootstrap';
import ProductCardStyle from './ProductCard.module.css';
import { FaCartPlus } from 'react-icons/fa';
import { Primary} from '@/public/colors/colos';
import CustomButton from '../UI/CustomButton';
import { deleteProduct } from '@/app/actions/actionServer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from "framer-motion";


type ProductCardType = {
  admin:boolean; 
  price?:string; 
  productName?:string; 
  productImages?:ProductImage[],
  _id:string; 
  style?: React.CSSProperties
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type ProductImage = {
  secure_url: string;      // image link (e.g., from Cloudinary)
  public_id?: string;     // optional alt text
};

function ProductCard({admin, price, productName, productImages, _id, style, onClick}:ProductCardType) {

  // navigate to the update form
  const navigate = useRouter();

  // delete a product
  async function onDeleteProductHandler(id:string){
    await deleteProduct(id)
  }

  return (
    <Col className={ProductCardStyle.container} style={style} md={3}>
        <Card style={{
          borderRadius:'10px',
          paddingLeft:'2px',
          paddingRight:'2px',
          paddingTop:'2px', 
          border:'0px', 
          background:"whitesmoke"
          }}
          className={`shadow-md ${ProductCardStyle.effect}`}
          >
        {/* <Card.Img src={ProductImage.src} /> */}
        {/* <Card.Img src={productImages?.[0]?.secure_url} /> */}
      {productImages?.[0]?.secure_url && (
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{
            duration: 0.6,
            ease: [0.19, 1, 0.22, 1], // smooth luxury curve
          }}
        >
          <Image
            width={500}
            height={500}
            src={productImages[0].secure_url}
            style={{ width: "100%", height: "auto" }}
            alt="product image"
          />
        </motion.div>
        )}
          <Card.Body>
              <Card.Text style={{color:Primary}}>
                In stock
              </Card.Text>
              <Card.Title>{productName}</Card.Title>
              <Card.Subtitle 
                style={{
                  marginTop:'15px',
                  marginBottom:'12px'
                  }}>
                <p>
                  <strong>Price: </strong>
                  <span style={{color:Primary}}>₦{Number(price).toLocaleString()}</span>   
                   {/* <s className="mb-2 text-muted">₦300</s> */}
                </p>
              </Card.Subtitle>
              {admin?null:<button 
               onClick={onClick}
                className={`${ProductCardStyle.contbtn} ${ProductCardStyle.shrinkborder}`}>
                  <FaCartPlus size={20} /> 
                  <p>View Product</p>
              </button>}
              {admin?<CustomButton titled='Update Product' 
                onClick={() => {navigate.push(`/admin/updateProduct/${_id}`)}}  />
                :null}
              {admin?<CustomButton titled='Delete Product' 
                onClick={()=>{onDeleteProductHandler(_id)}} 
                color="rgb(247, 108, 108)"/>:null}
          </Card.Body>
        </Card>
    </Col>
  );
}

export default ProductCard;