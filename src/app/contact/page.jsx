import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-amber-900  mb-6 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium amber-900 " htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-900 " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:amber-900 "
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-900 " htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:amber-900 "
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-900  text-white py-2 px-4 rounded-lg  transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
