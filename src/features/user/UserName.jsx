import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return <div></div>;
  return <div className="hidden text-sm font-bold md:block">{userName}</div>;
}

export default UserName;
