'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <ul className="flex space-x-6">
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
      </ul>
    </nav>
  );
};

export default Navbar;
