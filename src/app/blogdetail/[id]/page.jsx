'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

const BlogDetailPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const id = pathname.split('/').pop();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // State for editing
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`
          );
          setBlog(response.data);
          setTitle(response.data.title);
          setDescription(response.data.description);
        } catch (err) {
          setError(err.response?.data?.message || 'Failed to load blog.');
        } finally {
          setLoading(false);
        }
      };

      fetchBlog();
    }
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Blog updated successfully!');
      router.refresh();
      setIsEditing(false);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update blog.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`);
      alert('Blog deleted successfully!');
      setShowModal(false);
      router.push('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete blog.');
    }
  };

  if (loading) {
    return <p className="text-center mt-4">Loading blog...</p>;
  }

  if (error) {
    return <p className="text-center mt-4 text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <div className="flex space-x-4">
            <FaEdit
              className="text-blue-500 cursor-pointer hover:text-blue-700"
              size={24}
              onClick={() => setIsEditing(true)}
            />
            <FaTrash
              className="text-red-500 cursor-pointer hover:text-red-700"
              size={24}
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
        <p className="text-center text-gray-500 mt-2">
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <div className="mt-4">
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${blog.image}`}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <p className="mt-4 text-center text-gray-700">{blog.description}</p>

        {/* Edit Form */}
        {isEditing && (
          <form className="mt-6 p-4 bg-gray-50 rounded-lg" onSubmit={handleEdit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium mb-1">Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Update Blog
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="mt-4 ml-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </form>
        )}

        {/* Delete Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Are you sure you want to delete this blog?</p>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;
