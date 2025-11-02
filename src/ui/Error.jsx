import { useRouteError } from 'react-router-dom';
import LinkButton from '../utils/LinkButton';

export default function NotFound() {
  const error = useRouteError();
  console.log(error.message);
  return (
    <div className="">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}
