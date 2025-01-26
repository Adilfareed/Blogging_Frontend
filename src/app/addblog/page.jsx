'use client';

import { useState } from 'react';
import AddBlogForm from '../components/AddBlogForm'
import Allblogs from '../components/Allblogs';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import withAdminAuth from '../AdminRoutes/withAdminAuth';
const AddBlogPage = () => {
  const [selectedTab, setSelectedTab] = useState('all'); // 'add' or 'all'
   const user=useSelector((state)=>state.auth)
  const router=useRouter();
 
   
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex space-x-4">

            {/* All Blogs Tab */}
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 rounded-lg transition-all ${selectedTab === 'all'
                  ? 'bg-white text-indigo-600 font-bold'
                  : 'hover:bg-indigo-500'
                }`}
            >
              All Blogs
            </button>

            {/* Add Blog Tab */}
            <button
              onClick={() => setSelectedTab('add')}
              className={`px-4 py-2 rounded-lg transition-all ${selectedTab === 'add'
                  ? 'bg-white text-indigo-600 font-bold'
                  : 'hover:bg-indigo-500'
                }`}
            >
              Add Blog
            </button>

          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {selectedTab === 'add' ? <AddBlogForm selectedtab={setSelectedTab} /> : <Allblogs />}

      </div>
    </div>
  );
};


export default withAdminAuth(AddBlogPage) ;
