import { initializePaystackPayment } from "../actions/paystackActionServer";
import CustomButton from "../component/UI/CustomButton";
import { useStore } from "../store/cart";



export default function SummaryCard(){

    // getting slice of the state
    const deliveryPrice = useStore((state) => state.deliveryPrice);
    const cartStore = useStore((state) => state.cart);
    const totalPrice = cartStore.reduce((acc, item) => (acc + item.price * item.quantity),0);
        
    const handlePay = async () => {
        const result = await initializePaystackPayment({email:"example@gmail.com", amount:totalPrice + deliveryPrice});

        if (result.status && result.data.authorization_url) {
         window.location.href = result.data.authorization_url;
        } else {
            alert("Payment failed to initialize");
        }
    };

    return  <>           
    <h4  style={{fontWeight:'bolder', marginBottom:'20px'}}>Order Summary</h4>
        <p style={{display:'flex', marginBottom:'10px', flexDirection:'row', justifyContent:'space-between'}}>
            <span>Items total Price:</span> <span>₦{totalPrice}</span>
        </p>
        <p style={{display:'flex', marginBottom:'10px', flexDirection:'row', justifyContent:'space-between'}}>
            <span>Delivery Price:</span> 
            <span>
                {deliveryPrice == 0?
                <span style={{color:'red'}}>
                    A Delivery Location is Required
                </span>:`₦${deliveryPrice}`}
            </span>
        </p>
        <h5 style={{fontWeight:'bolder', marginBottom:'10px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <span>Total:</span> <span>₦{totalPrice + deliveryPrice}</span>
        </h5>
        <CustomButton titled="Continue To Checkout" onClick={handlePay} disable={deliveryPrice == 0} />

    </>
}