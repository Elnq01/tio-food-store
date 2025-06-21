import Table from 'react-bootstrap/Table';
import ImgSrc from "../../public/indomie 2.avif";
import Image from 'next/image';
import TableButton from './TableButton';
import SpinnerBtn from './SpinnerBtn';
import { useStore } from '../store/cart';

export default function BasicTable() {

  // getting slice of the state
  const cartItems = useStore((state) => state.cart);
  const removeProductFromCart = useStore((state) => state.removeItemFromCart)
  console.log("The store: ", cartItems);
  console.log("Remove Item from the store: ", removeProductFromCart);

  return (
    <Table striped hover responsive className='text-center align-middle'>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {cartItems.map((item, index:number) => {
        return <tr key={item._id}>
          <td>{index + 1}</td>
          <td><Image src={ImgSrc} alt='product' height={80} width={80} /></td>
          <td>{item?.productName}</td>
          <td><SpinnerBtn id={item._id} quantity={item.quantity} /></td>
          <td>₦{item.price}</td>
          <td><TableButton titled="Remove Product" onClick={() => {
            console.log("No Diddy!")
            removeProductFromCart(item._id)
          }} /></td>
        </tr>
      })}
        </tbody>
    </Table>
  );
}
