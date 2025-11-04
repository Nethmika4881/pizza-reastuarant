import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalAmount, getTotalQuantity } from './CartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const selectTotalQuantity = useSelector(getTotalQuantity);
  const selectTotalAmount = useSelector(getTotalAmount);
  if (!selectTotalQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-950 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{selectTotalQuantity} pizzas</span>
        <span>{formatCurrency(selectTotalAmount)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
