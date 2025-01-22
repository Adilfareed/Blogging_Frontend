'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../Redux/slices/blogsSlice';
import Link from 'next/link';

const BlogListPage = () => {
  const dispatch = useDispatch();
  const { blogs, status, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>

        {status === 'loading' && <p className="text-center">Loading blogs...</p>}
        {status === 'failed' && (
          <p className="text-center text-red-500">Error: {error}</p>
        )}

        {status === 'succeeded' && blogs.length === 0 && (
          <p className="text-center">No blogs available.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (

            <Link href={`/blogdetail/${blog._id}`}>
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${blog.image}`}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-700">{blog.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
