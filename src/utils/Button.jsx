import { Link } from 'react-router-dom';

export default function Button({
  type,
  children,
  isDisabled = false,
  to,
  onCilckFunc,
}) {
  const base =
    ' text-sm inline-block cursor-pointer bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-all duration-300 hover:bg-yellow-500 hover:outline-2 hover:outline-yellow-200 focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 focus:outline-none active:bg-yellow-600 disabled:cursor-not-allowed disabled:bg-yellow-200 md:py-3';
  const styles = {
    primary: base + 'px-4 py-3 md:px-6  rounded-xl ',
    small: base + 'px-4  md:px-5 md:py-2.5  rounded-xl',
    rounded: base + 'px-5 py-1 md:px-3 md:py-2 text-sm rounded-full ',
    secondary:
      ' rounded text-sm inline-block cursor-pointer md:px-2.5 rounded-xl bg-transparent font-semibold border-2 border-stone-300 tracking-wide text-stone-800   transition-all duration-300  hover:outline-none hover:border-2 hover:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-0 focus:outline-none  hover:bg-stone-300 disabled:cursor-not-allowed disabled:bg-yellow-200 md:py-3',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onCilckFunc) {
    return (
      <button
        disabled={isDisabled}
        className={styles[type]}
        onClick={onCilckFunc}
      >
        {children}
      </button>
    );
  }
  return (
    <button disabled={isDisabled} className={styles[type]}>
      {children}
    </button>
  );
}
