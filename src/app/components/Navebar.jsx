'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" lg:grid grid-cols-3  px-6 py-4 hidden ">

      <div className='col-span-2'>
        <h1 className='font-bold text-3xl p-3 '>Blog <span className='text-amber-900 '>Breeze</span></h1>
      </div>
      <div>
      <ul className="flex space-x-6 p-4 justify-center items-center text-2xl ">
        <li className='font-semibold hover:text-amber-900'>
          <Link href="/" legacyBehavior>
          Blogs
          </Link>
        </li>
        <li className='font-semibold hover:text-amber-900'>
          <Link href="/about" legacyBehavior>
          About Us
          </Link>
        </li>
        <li className='font-semibold hover:text-amber-900'>
          <Link href="/contact" legacyBehavior>
          Contact
          </Link>
        </li>
        <li className='bg-amber-950 rounded-lg p-3 text-white hover:bg-amber-900'>
          <Link href="/contact" legacyBehavior>
          Login
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
