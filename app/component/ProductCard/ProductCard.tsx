"use client"

import Card from 'react-bootstrap/Card';
import ProductImage from '../../../public/king-500x500.jpg';
import { Button, Col } from 'react-bootstrap';
import ProductCardStyle from './ProductCard.module.css';
import { FaCartPlus } from 'react-icons/fa';
import { Primary} from '@/public/colors/colos';
import CustomButton from '../UI/CustomButton';
import { deleteProduct } from '@/app/actions/actionServer';
import { useRouter } from 'next/navigation';

type ProductCardType = {
  admin:boolean; 
  price:string; 
  productName:string; 
  _id:string; 
  style?: React.CSSProperties
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function ProductCard({admin, price, productName, _id, style, onClick}:ProductCardType) {

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
          background:"white"
          }}
          className='shadow-sm'
          >
        <Card.Img src={ProductImage.src} />
        {/* <Card.Img src={productImages[0]} /> */}
        
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
                  <span style={{color:Primary}}>₦{price}</span>    <s className="mb-2 text-muted">₦300</s>
                </p>
              </Card.Subtitle>
              {admin?null:<Button 
               onClick={onClick}
                style={{
                  display:'flex', 
                  flexDirection:'row', 
                  alignItems:'center', 
                  textAlign:'center',
                  columnGap:'10px',
                  color:Primary,
                  background:"rgb(214, 243, 216)",
                  border:'none'
                  }}>
                  <FaCartPlus size={20} /> 
                  <p>View Product</p>
              </Button>}
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