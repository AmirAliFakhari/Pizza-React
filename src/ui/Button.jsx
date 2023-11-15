import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'focus:rings-yellow-300 text-sm rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-200 focus:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 active:bg-red-400  ';
  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' px-3 py-3 sm:px-5 text-xs sm:py-2.5',
    round: base + ' px-3 py-2 sm:px-5 text-sm sm:py-2 sm:px-3.5',
    secondary:
      'focus:rings-yellow-300 rounded-full border-2 border-stone-300 px-4 py-2.5 sm:px-6 sm:py-3.5 hover:text-white  font-semibold uppercase text-stone-400 transition-colors duration-300 hover:bg-stone-400 focus:bg-stone-600 focus:outline-none focus:ring focus:ring-stone-500 focus:ring-offset-2   ',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <Link to={to} onClick={onClick} className={styles[type]}>
        {children}
      </Link>
    );
  return <button className={styles[type]}>{children}</button>;
}
