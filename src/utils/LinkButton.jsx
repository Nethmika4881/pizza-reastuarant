import { Link, useNavigate } from 'react-router-dom';

export default function LinkButton({ children, path }) {
  const navigate = useNavigate();
  if (path === '-1')
    return <button onClick={() => navigate(-1)}>{children}</button>;

  console.log('done');
  return (
    <Link
      to={path}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}
