import BlogCard2 from '@/components/BlogCard2';
import { useAppContext } from '@/contexts/AppContext'
import { Blog } from '@/lib/data';
import React from 'react'

const AllBlogs = () => {
  const { allBlogs } = useAppContext();
  console.log("all blogs",allBlogs)
  return (
    <div>
      {
        allBlogs.map((blog: Blog)=><BlogCard2 blog={blog} key={blog.id}/>)
      }
    </div>
  )
}

export default AllBlogs
