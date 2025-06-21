
'use server';
import Shipbubble from 'shipbubble';
// import { TioFoodStoreAddressCode } from './TioFoodStoreAddressCode';

Shipbubble.init({ apiKey: process.env.SHIPBUBBLE_API_KEY??"" });

// export async function getAddressCodeForTioFoodStore() {
//     // const addresses = await Shipbubble.address.getAddresses();
// //     const addresses = await Shipbubble.address.getValidatedAddresses({
// //   Page: 1,
// //   PerPage: 5,
// // });
//     // const validated = await Shipbubble.address.validateAddress({
//     //     name:"Tio Food Store",
//     //     email:'qele95@gmail.com',
//     //     phone:"09060547841",
//     //     address:"35 Olonode Street, Alagomeji, Lagos State, Nigeria",
//     //     // local_government:"Lagos MainLand",
//     //     // state:"Lagos",
//     //     // country: 'NG',
//     //   });
//     // console.log("Let me see the address in the list: ", validated)

//     const category = await Shipbubble.misc.getPackageCategories();
//     console.log("The Categories: ", category.formatted);
    
// }



export async function getPriceRates({state, LGA, address}:{state:string, LGA:string, address:string}) {
  try {
    // 1. Get all saved addresses
    const addresses = await Shipbubble.address.getValidatedAddresses({
        Page: 1,
        PerPage: 5,
    });


    const allExistingAddresses = addresses?.toJSON?.();
    const AddressData = [...(allExistingAddresses.data?.results?? [])];

    // console.log("What we have: ", AddressData);
    
    // 2. Try to find a matching address
    const existing = AddressData.find((addr) =>
        addr.address_data?.state?.toLowerCase() === state.toLowerCase() && 
        addr.address_data?.formatted_address?.toLowerCase() === address.toLowerCase() &&
        addr.address_data?.city?.toLowerCase() === LGA.toLowerCase() 
    );


    let receiverCode;

    if (existing) {
      receiverCode = existing.address_code;
    } else {
        const fulladdress = `${address}, Lagos State, Nigeria`;
        // console.log("Full Address: ", fulladdress);

      // 3. Validate and create address
        const validated = await Shipbubble.address.validateAddress({
            name:"Tio Food Store",
            email:'qele95@gmail.com',
            phone:"09060547841",
            address:fulladdress
            // address:`30 Olonode Street, Alagomeji, Lagos State. Nigeria`
        });
        // console.log("Let me see the address in the list: ", validated)

      receiverCode = validated.formatted.addressCode;
    }

    // // 4. Define your sender's address code (created earlier or hardcoded for now)
    const senderCode = process.env.SENDER_ADDRESS_CODE; // e.g. from .env
    // const senderCode = TioFoodStoreAddressCode.data.address_code

    // // 5. Fetch delivery rates
    const rates = await Shipbubble.rates.requestShippingRates({
        senderAddressCode:Number(senderCode),
        recieverAddressCode:Number(receiverCode),
        categoryId:2178251,
        packageDimension:{
            height:10,
            length:20,
            width:15
        },
        packageItems: [
        {
          name: 'Mama Good Rice',
          quantity: 1,
          unitWeight:1,
          unitAmount:5000, // in kg
          description:"Test Product"
        }
      ],
      pickupDate: new Date(),
    });

    console.log("Getting the Rates: ", rates.formatted.fastestCourier);
    return rates.formatted.fastestCourier.total;
    // return {
    //   success: true,
    //   rates: rates.options, // an array of delivery options with price
    // };

  } catch (err) {
    console.error('Delivery Error:', err);
    // if(err instanceof Error){
    //   return { success: false, error: err.message };
    // }
    
    // return { success: false, error: err };
  }
}
