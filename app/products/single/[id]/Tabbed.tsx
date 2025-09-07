

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductRating from './Rating';

function TabbedNav({description}:{description:string}) {
  const [key, setKey] = useState<string>('profile');

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
        <ProductRating value={4} />
      </Tab>
    </Tabs>
  );
}

export default TabbedNav;