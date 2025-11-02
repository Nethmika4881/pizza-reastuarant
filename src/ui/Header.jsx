import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

export default function Header() {
  return (
    <header className="flex flex-col justify-between border-b border-stone-200 bg-yellow-400 px-4 py-4 uppercase sm:flex-row sm:px-6">
      <Link to="/" className="font-semibold tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
