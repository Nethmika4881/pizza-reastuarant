import { useDispatch, useSelector } from 'react-redux';
import Button from '../../utils/Button';
import {
  decreaseItemQuantity,
  getCurrentQuantityByID,
  increaseItemQuantity,
} from './CartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const selectCurrQuantity = useSelector(getCurrentQuantityByID(pizzaId));

  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1">
      <Button
        type="rounded"
        onCilckFunc={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      {selectCurrQuantity}
      <Button
        type="rounded"
        onCilckFunc={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
