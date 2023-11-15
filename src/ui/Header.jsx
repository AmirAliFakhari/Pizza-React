import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flex  items-center justify-between border-b border-stone-300 bg-yellow-500 px-4 py-3 uppercase sm:px-4">
      <Link to="/" className="tracking-widest">
        Fast React Company Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
