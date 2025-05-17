import React from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import BlogCard from './BlogCard';
import { Blog } from '@/lib/data';
import { randomUUID } from 'crypto';

const Scroller = ({myBlogs, Title}:{myBlogs:Blog[], Title:string}) => {
  return (
     <div className='p-3 flex flex-col mt-4 h-[300px] font-lg'>
        <h4 className='font-semibold text-xl'>{Title}</h4>
    <div className='w-full h-full flex gap-1 '>
        <ScrollArea className="w-full rounded-md ">
      <div className="flex w-max space-x-4 p-4">
      {
        myBlogs.map((blog: Blog, i) => (
          <BlogCard blog={blog} key={blog.id} />
        ))
      }
        </div>
      <ScrollBar  orientation="horizontal" />
    </ScrollArea>
  </div>
    </div>
  )
}

export default Scroller
