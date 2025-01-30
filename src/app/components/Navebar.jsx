'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/slices/authslice';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:grid grid-cols-3 px-6 py-4">
        <div className="col-span-2">
          <Link href="/">
            <h1 className="font-bold text-3xl p-3">
              Blog <span className="text-amber-900">Breeze</span>
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-6 p-4 justify-center items-center text-1xl">
            <li className="font-semibold hover:text-amber-900">
              <Link href="/">Blogs</Link>
            </li>
            <li className="font-semibold hover:text-amber-900">
              <Link href="/about">About Us</Link>
            </li>
            <li className="font-semibold hover:text-amber-900">
              <Link href="/contact">Contact</Link>
            </li>
            {user && user.role === 'admin' && (
              <li className="font-semibold">
                <Link href="/addblog">Upload</Link>
              </li>
            )}
            {user ? (
              <li
                className="bg-amber-950 rounded-lg p-3 text-white hover:bg-amber-900 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            ) : (
              <li className="bg-amber-950 rounded-lg p-3 text-white hover:bg-amber-900">
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-white shadow-md">
        <Link href="/">
          <h1 className="font-bold text-2xl">
            Blog <span className="text-amber-900">Breeze</span>
          </h1>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-white shadow-lg flex flex-col items-center justify-center space-y-6 z-50"
          >
            <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
              <FiX size={28} />
            </button>
            <Link href="/" className="text-xl font-semibold" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link href="/about" className="text-xl font-semibold" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/contact" className="text-xl font-semibold" onClick={() => setIsOpen(false)}>Contact</Link>
            {user && user.role === 'admin' && (
              <Link href="/addblog" className="text-xl font-semibold" onClick={() => setIsOpen(false)}>Upload</Link>
            )}
            {user ? (
              <button className="bg-amber-950 text-white px-6 py-3 rounded-lg" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link href="/login" className="bg-amber-950 text-white px-6 py-3 rounded-lg" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
