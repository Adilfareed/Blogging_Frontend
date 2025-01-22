'use client';

import { useState } from 'react';
import AddBlogForm from '../components/AddBlogForm'
import Allblogs from '../components/Allblogs';
// Placeholder for All Blogs Component


const AddBlogPage = () => {
  const [selectedTab, setSelectedTab] = useState('add'); // 'add' or 'all'

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex space-x-4">
            {/* Add Blog Tab */}
            <button
              onClick={() => setSelectedTab('add')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedTab === 'add'
                  ? 'bg-white text-indigo-600 font-bold'
                  : 'hover:bg-indigo-500'
              }`}
            >
              Add Blog
            </button>
            {/* All Blogs Tab */}
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedTab === 'all'
                  ? 'bg-white text-indigo-600 font-bold'
                  : 'hover:bg-indigo-500'
              }`}
            >
              All Blogs
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {selectedTab === 'add' ? <AddBlogForm /> : <Allblogs />}

      </div>
    </div>
  );
};

export default AddBlogPage;
