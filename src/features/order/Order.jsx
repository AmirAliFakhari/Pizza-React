// Test ID: IIDSAT

import { useEffect } from 'react';
import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../Services/apiRestaurant';
import formatCurrency, {
  calcMinutesLeft,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  // console.log(order);
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle')
        fetcher.load('/Pizza-React/menu');
    },
    [fetcher],
  );
  console.log(fetcher.data);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Ordeer #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase text-green-50">
            {status} order
          </span>
        </div>
      </div>
      <ul className="divide-y-2">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={
              fetcher.data?.find((el) => el.id === item.pizzaId).ingredients ??
              []
            }
          />
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5 ">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div className="space-y-2 bg-stone-200 px-6 py-3 ">
        <p className="text-sm font-medium text-stone-600 ">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
