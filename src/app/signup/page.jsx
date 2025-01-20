'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../Redux/slices/authslice';
import { useRouter } from 'next/navigation'; // <-- import from next/navigation

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter(); // <-- initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    try {
      await dispatch(signupUser(userData)).unwrap();
      router.push('/'); // <-- use the router instance
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-6">Sign Up</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
}
