import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  //   function handle(e) {
  //     e.preventDefault();
  //     dispatch(deleteItem(pizzaId));
  //   }
  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Delete
    </Button>
  );
}
