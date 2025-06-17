import Table from 'react-bootstrap/Table';
import ImgSrc from "../../public/indomie 2.avif";
import Image from 'next/image';
import CustomButton from '../component/UI/CustomButton';
import TableButton from './TableButton';
import SpinnerBtn from './SpinnerBtn';

export default function BasicTable() {
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
        <tr>
          <td>1</td>
          <td><Image src={ImgSrc} alt='product' height={80} width={80} /></td>
          <td>Mama Pride Rice</td>
          <td><SpinnerBtn /></td>
          <td>₦2,000</td>
          <td><TableButton titled="Remove Product" /></td>
        </tr>
        <tr>
          <td>2</td>
          <td><Image src={ImgSrc} alt='product' height={80} width={80} /></td>
          <td>Mama Pride Rice</td>
          <td><SpinnerBtn /></td>
          <td>₦2,000</td>
          <td><TableButton titled="Remove Product" /></td>
        </tr>
        <tr>
          <td>3</td>
          <td><Image src={ImgSrc} alt='product' height={80} width={80} /></td>
          <td>Mama Pride Rice</td>
          <td><SpinnerBtn /></td>
          <td>₦2,000</td>
          <td><TableButton titled="Remove Product" /></td>
        </tr>
        </tbody>
    </Table>
  );
}
