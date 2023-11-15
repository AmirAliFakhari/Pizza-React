import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartPrice) return null;
  return (
    <div className=" flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-300 sm:px-6">
      <p className="  space-x-4 text-sm  font-semibold text-stone-200 sm:space-x-6 md:text-base">
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCartPrice}$</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
