

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductRating from './Rating';
import ReviewCards from './ReviewCards';
import WriteReviewModal from './WriteReviewModal';

const reviewData = [
  {
    id:0,
    name:'Jack',
    time:'2 days',
    rating:4,
    review: "Wow the delivery was superb and product quality is amazing"
  },
  {
    id:1,
    name:'Eddie',
    time:'1 days',
    rating:5,
    review: "Excelent"
  },
  {
    id:2,
    name:'Riddick',
    time:'2 hours',
    rating:4,
    review: "Quality product!"
  },
  {
    id:3,
    name:'Emmanuel',
    time:'6 hours',
    rating:5,
    review: "Honestly, I would have giving more stars if it was allowed!"
  }

]

function TabbedNav({description, productId}:{description:string, productId:string}) {
  const [key, setKey] = useState<string>('profile');

  // the modals logic
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Tabs
        variant='underline'
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => {if (k !== null) setKey(k)}}
      className="mb-3"
    >
      {/* <Tab eventKey="home" title="Overview" style={{minHeight:'300px'}} >
        Leaves your skin feeling hydrated Provides intense 48 hour moisture Reliable 72h anti-perspirant 
        protection that cares for your skin Dual Protect formula with two antibacterial actives and 0% alcohol
      </Tab> */}
      <Tab eventKey="profile" title="Description" style={{minHeight:'300px'}}>
       {description}
      </Tab>
      <Tab eventKey="contact" title="Review"  style={{minHeight:'300px'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{display:'flex', flexDirection:'row', columnGap:'10px', textAlign:'center', alignItems:'center'}}>
            <h5 style={{textAlign:"center",height:'100%', fontWeight:'bold' }}>4.4</h5>
            <ProductRating value={4} />
            <h6 style={{textAlign:"center", height:'100%'}}>Over 312 Reviews</h6>
          </div>
          <WriteReviewModal 
            show={show} 
            handleClose={handleClose} 
            handleShow={handleShow}
            productId={productId} />
        </div>

        <div>
          {reviewData.map(ele => {
            return <ReviewCards 
                    key={ele.id}
                    name={ele.name}
                    time={ele.time}
                    rating={ele.rating}
                    review={ele.review}
                    />
          })}
        </div>
      </Tab>
    </Tabs>
  );
}

export default TabbedNav;



