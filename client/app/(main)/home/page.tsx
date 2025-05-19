"use client"
import BlogCard2 from '@/components/BlogCard2';
import { useAppContext } from '@/contexts/AppContext';
import { Blog, blogs } from '@/lib/data';
import React from 'react'

type Props = {}

export default  function Home(props: Props){
   const { allBlogs } = useAppContext();
  console.log("all blogs",allBlogs)
  return (
    <div className='box-border mt-5'>
      <div>
            <h3 className='p-3 text-2xl font-bold'>All blogs</h3>
      </div>
      <div className='p-3 flex flex-wrap gap-4'>
           {
          allBlogs?.map((blog: Blog)=><BlogCard2 blog={blog} key={blog?.id}/>)
        }
          
      </div>
     
    </div>
  )
}