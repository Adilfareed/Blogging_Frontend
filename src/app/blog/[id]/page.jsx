'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { fetchBlogs } from '../../../Redux/slices/blogsSlice';

export default function BlogDetails() {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs.blogs);
  const status = useSelector((state) => state.blogs.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  if (status === 'idle' || status === 'loading') {
    return <p>Loading blog...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to load blog.</p>;
  }

  const blog = blogs.find((b) => b._id === id);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 text-center mb-8">{new Date(blog.createdAt).toLocaleDateString()}</p>
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8">
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${blog.image}`}
          alt={blog.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">{blog.description}</p>
      </div>
    </div>
  );
}
