import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: 'Home', link: '/Home' },
    { id: 2, name: 'Shop', link: '/Shop' },
    { id: 3, name: 'Deals', link: '/Deals' },
    { id: 4, name: 'Coupons', link: '/Coupons' },
    { id: 5, name: 'Contact', link: '/Contact' },
  ];
  return (
    <nav className="p-2 bg-indigo-300 font-semibold">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`md:flex justify-center md:space-x-3 ${
          open ? 'block' : 'hidden'
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
