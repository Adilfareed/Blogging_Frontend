'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" lg:grid grid-cols-3  px-6 py-4 hidden ">

      <div className='col-span-2'>
        <h1 className='font-bold text-3xl'>Blog <span className='text-amber-900 '>Breeze</span></h1>
      </div>
      <div>
      <ul className="flex space-x-6 p-4 justify-center items-center ">
        <li>
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Blogs</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className="hover:underline">About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className="hover:underline">Contact</a>
          </Link>
        </li>
        <li className='bg-amber-950 rounded-lg  text-white'>
          <Link href="/contact" legacyBehavior>
            <button className="hover:bg-amber-800 p-2   ">Login</button>
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
