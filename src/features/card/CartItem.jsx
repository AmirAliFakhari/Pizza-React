import { useSelector } from 'react-redux';
import { formatCurrency } from '../../Utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const getCurrentQunatity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex  items-center justify-between sm:gap-6">
        <p className="fonr-bold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          currentQunatity={getCurrentQunatity}
          pizzaId={pizzaId}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
