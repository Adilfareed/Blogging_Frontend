
'use client'; 
import Navbar from '../app/components/Navebar';

import { useState } from 'react';


const blogs = [
  { id: 1, title: 'Blog Title 1', text: 'Dummy text for blog 1 this is blog 1 gor the .', image: '/blog1.jpg' },
  { id: 2, title: 'Blog Title 2', text: 'Dummy text for blog 2.', image: '/blog2.jpg' },
  { id: 3, title: 'Blog Title 3', text: 'Dummy text for blog 3.', image: '/blog3.jpg' },
  { id: 4, title: 'Blog Title 1', text: 'Dummy text for blog 1 this is blog 1 gor the .', image: '/blog2.jpg' },
  { id: 5, title: 'Blog Title 2', text: 'Dummy text for blog 2.', image: '/blog3.jpg' },
  { id: 6, title: 'Blog Title 3', text: 'Dummy text for blog 3.', image: '/blog1.jpg' },
];

const countries = ['USA', 'UK', 'India', 'Canada'];

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Blogs</h1>
        <div className="mb-4">
          <label htmlFor="country" className="block text-lg font-medium mb-2">
            Select Country
          </label>
          <select
            id="country"
            className="border border-gray-300 rounded-md p-2"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="border rounded-lg p-4">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-4 rounded" />
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p>{blog.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
