'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/slices/authslice';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      // Get the user data directly from the action result
      const result = await dispatch(loginUser(userData)).unwrap();

      // Redirect based on user role
      if (result.user && result.user.role === 'admin') {
        router.push('/addblog');
      } else {
        router.push('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-gray-100 to-blue-200 p-10 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Welcome Back
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-amber-950 text-white rounded-lg transition"
        >
          Log In
        </button>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
