

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductRating from './Rating';

function TabbedNav() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
        variant='underline'
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Overview" style={{minHeight:'300px'}} >
        Leaves your skin feeling hydrated Provides intense 48 hour moisture Reliable 72h anti-perspirant 
        protection that cares for your skin Dual Protect formula with two antibacterial actives and 0% alcohol
      </Tab>
      <Tab eventKey="profile" title="Description" style={{minHeight:'300px'}}>
       NIVEA Men Deep Impact Body Lotion refreshes your skin with an intense, woody, and spicy scent, it leaves
        your skin feeling hydrated and healthy. NIVEA Men Deep Impact Body Lotion provides intense 48-hour moisture.
         Go for it with NIVEA Men Deep Impact Body Lotion for Healthy Looking Skin!
         NIVEA MEN Dry Impact roll-on offers you 72-hour reliable protection with outstanding skin comfort.
          The effective dual protect formula with 2 antibacterial actives keeps your armpits dry and prevents odour.
           At the same time, this skin-friendly formula with 0% alcohol supports a comfortable skin feeling. Its skin 
           tolerance has been dermatologically proven. The unique dry and comfortable skin feeling is accompanied by a 
           virile fragrance with clean, inviting, and aromatic fresh blend of tangy citrus and herbal notes. Designed for
            men who want maximum protection with reassuring masculine fragrance and without any compromise
      </Tab>
      <Tab eventKey="contact" title="Review"  style={{minHeight:'300px'}}>
        <ProductRating value={4} />
      </Tab>
    </Tabs>
  );
}

export default TabbedNav;