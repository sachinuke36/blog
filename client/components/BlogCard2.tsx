"use client"

import { Blog } from '@/lib/data'
import React from 'react'
import { Card } from './ui/card'
import BlogDate from './BlogDate'
import { useRouter } from 'next/navigation'

const BlogCard2 = ({blog}:{blog: Blog}) => {
    const router = useRouter();
  return (
     <Card  onClick={()=> router.push(`/blog/${blog?.id}`)} className='flex flex-col h-[250px]  w-[350px] border-none text-white shadow shadow-orange-300 gap-3 bg-[#353535ee]' >
            <div className='px-2'>
                <p className=' font-semibold'>{blog.title.length > 40 ? blog.title.slice(0, 38) + ".." : blog.title}</p>
            </div>
            <div className='px-2'>
                <p className='text-sm'>{blog.content.length > 45 ? blog.content.slice(0, 100) + '...' : blog.content}</p>
            </div>
            <div className='px-2  flex gap-2'>{blog.tags.filter((tag, i) => i < 3).map((tag, i) => <p key={i} className='text-[10px] shadow-purple-300 shadow-sm  bg-[#121111] px-1'>{tag}</p>)}</div>
            <div className='flex justify-between px-2 '>
                <p className='text-sm'><BlogDate date={blog.updatedAt} /> </p>
                <p className='text-amber-500 font-semibold'>{blog.authorName}</p>
            </div>
            
        </Card>
  )
}

export default BlogCard2
