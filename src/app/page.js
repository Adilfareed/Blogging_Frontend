
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


  return (
    <div>
      <Navbar />

      <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[80px] font-bold'> Our News </h1>
            <p className='m-4  text-2xl'> Get our latest news first and increase your Knowledge about Current World </p>

      </div>
      <div className='flex justify-center items-center'> 
        <img  className='w-[80%]  h-[450px] object-cover ' src='/blogging-main.jpg '/>
      </div>
      <div className="container mx-auto p-6">
    
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="border rounded-lg p-4 lg:flex">
             <div> <img src={blog.image} alt={blog.title} className="w-72  h-40 object-cover mb-4 rounded" /></div>
             <div >
             <h2 className="text-4xl font-bold mb-2  p-4">{blog.title}</h2>
             <p className='p-4' >{blog.text}</p>
             </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
