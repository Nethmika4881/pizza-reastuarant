import { Link } from 'react-router-dom';
import LinkButton from '../../utils/LinkButton';
import Button from '../../utils/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './CartSlice';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const selectCart = useSelector(getCart);

  if (!selectCart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton path="/menu"> &larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart {userName},</h2>
      <ul className="divide-y divide-stone-300 border-b border-stone-300">
        {selectCart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order Pizzas
        </Button>

        <Button type="secondary" onCilckFunc={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
