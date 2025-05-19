"use client"
import { useAppContext } from '@/contexts/AppContext';
import {  Blog as Blogtype } from '@/lib/data';
import React, { use } from 'react'
import BlogDate from '@/components/BlogDate'

type Props = {
  params: { id: string }
};

const Blog = ({params}: { params: Promise<{ id: string }> }) => {
      const { id } = use(params);
      const { allBlogs } = useAppContext();
    const blog : Blogtype = allBlogs?.find((blog : Blogtype)=> blog.id === id);
    console.log(blog);


  return (
    <div className='p-2 flex flex-col gap-4'>
        <div>
             <h2 className=' text-xl sm:text-2xl text-center font-semibold'>{blog?.title}</h2>
             <h4 className='text-lg sm:text-xl text-orange-500 font-bold flex justify-end'>{blog?.authorName}</h4>
        </div>
     
      <p className='px-4 text-sm sm:text-md'>{blog?.content}</p>
      <p className='px-4 text-sm'> <BlogDate date={blog?.updatedAt} /> </p>
      <div className='flex gap-2 px-4 flex-wrap'>{blog?.tags.map((tag, i)=> <div key={i} className='text-[10px] flex items-center justify-center sm:text-[14px] shadow-purple-300 shadow-sm  bg-[#121111] px-1'>{tag}</div>)}</div>
    </div>
  )
}

export default Blog
