"use client"

import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import DeliveryLocationFormControl from './DeliveryLocationFormControl';
import CustomButton from '@/app/component/UI/CustomButton';
import { getPriceRates } from '@/app/actions/deliveryActionServer';
import { useStore } from '@/app/store/cart';

const formSeed = [
  {
    id:0,
    name:"state"
  },
  {
    id:1,
    name:"LGA"
  },
  {
    id:2,
    name:"address"
  }
]

export default function DeliveryLocation() {

  const deliveryFormRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({
    state:'',
    LGA:'',
    address:''
  });
  
  // getting a slice of the store
  const deliveryPrice = useStore((state) => state.deliveryPrice)
  const setDeliveryPrice = useStore((state) => state.addDeliveryPrice)

  // const [courierPrice, SetCourierPrice] = useState(0);

  function onChangeHandler(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
        const {name, value} = e.target;

        setFormState(prevState => ({
            ...prevState,
            [name]:value
        }));
  }


  async function onSubmitHandler(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();

    // do the validation of the inputs here
    if(formState.state == ""){
        const state = deliveryFormRef.current?.["state"];
        state.setCustomValidity("Empty")
        state.reportValidity(); 
        return
    } else if(formState.LGA == ""){
        const LGA = deliveryFormRef.current?.["LGA"];
        LGA.setCustomValidity("Empty")
        LGA.reportValidity(); 
        return
    } else if(formState.address == ""){
        const address = deliveryFormRef.current?.["address"];
        address.setCustomValidity("Empty")
        address.reportValidity(); 
        return
    }

    // submitting the address
    try{
      const couriers = await getPriceRates(formState);
      // SetCourierPrice(couriers)
      setDeliveryPrice(couriers);
      // await getAddressCodeForTioFoodStore();
    }catch(err){
      console.log("Error: ", err);
    }
  }

  return (<Form ref={deliveryFormRef}>
          {formSeed.map(formcontrol => <DeliveryLocationFormControl 
          key={formcontrol.id}
          value={formState[formcontrol.name]}
          onChange={onChangeHandler}
          {...formcontrol}  />)}
          <CustomButton titled="Submit" onClick={onSubmitHandler} />
          {deliveryPrice?<div 
          style={{background:"rgb(214, 243, 216)",borderRadius:'10px',
           display:'flex', flexDirection:'column', padding:'10px', marginBottom:'10px'}}>
            <p>The Delivery is estimated as: ₦{deliveryPrice}</p>
          </div>:null}
    </Form>
  );
}