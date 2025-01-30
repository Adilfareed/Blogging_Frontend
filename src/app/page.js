'use client';
import Navbar from '../app/components/Navebar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../Redux/slices/blogsSlice';
import Link from 'next/link';

export default function Home() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const status = useSelector((state) => state.blogs.status);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[80px] font-bold">Our News</h1>
        <p className="m-4 text-2xl">
          Get our latest news first and increase your Knowledge about Current World
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="w-[80%] h-[450px] object-cover"
          src="/blogging-main.jpg"
          alt="Blogging"
        />
      </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {status === 'loading' && <p>Loading blogs...</p>}
          {status === 'failed' && <p>Failed to load blogs.</p>}
          {status === 'succeeded' &&
            blogs.slice(0, visibleCount).map((blog) => (
              <Link
                key={blog._id}
                href={`/blog/${blog._id}`}
                className="block border rounded-lg p-4 lg:flex cursor-pointer"
              >
                <div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${blog.image}`}
                    alt={blog.title}
                    className="w-72 h-40 object-cover mb-4 rounded"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2 p-4">{blog.title}</h2>
                  <p className="p-4">{blog.text}</p>
                </div>
              </Link>
            ))}
        </div>
        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-amber-950 text-white font-semibold rounded-lg shadow-md"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
