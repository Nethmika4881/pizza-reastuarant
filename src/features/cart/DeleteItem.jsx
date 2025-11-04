import { useDispatch } from 'react-redux';
import Button from '../../utils/Button';
import { deleteItem } from './CartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handleDelete = function () {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button type="small" onCilckFunc={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
