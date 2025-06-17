
import Rating from '@mui/material/Rating';

export default function ProductRating({value}:{value:number}) {

  return (
      <Rating name="read-only" value={value} readOnly />
  );
}