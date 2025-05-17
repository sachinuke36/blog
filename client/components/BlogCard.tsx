import { Blog } from '@/lib/data'
import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'

const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <Card className='flex flex-col h-[250px]  w-[350px] border-none text-white shadow shadow-orange-300 gap-1 bg-[#353535ee]' >
            <div className='p-2'>
                <p className=' font-semibold'>{blog.title.length > 40 ? blog.title.slice(0, 38) + ".." : blog.title}</p>
            </div>
            <div className='px-2'>
                <p className='text-sm'>{blog.content.length > 45 ? blog.content.slice(0, 100) + '...' : blog.content}</p>
            </div>
            <div className='px-2 flex gap-2'>{blog.tags.filter((tag, i) => i < 3).map((tag, i) => <p key={i} className='text-[10px] shadow-purple-300 shadow-sm  bg-[#121111] p-1'>{tag}</p>)}</div>
            <div className='flex justify-between px-2 my-4'>
                <p className='text-sm'>{new Date(blog.updatedAt).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                })}</p>
                <p className='text-amber-500 font-semibold'>{blog.author}</p>
            </div>
            {
                blog.status === "DRAFT" && <div className='flex px-2 justify-between'>
                    <Button className='shadow-sm shadow-blue-400 hover:bg-blue-400 hover:text-black'>Edit</Button>
                    <Button className='shadow-sm shadow-indigo-300 hover:bg-indigo-400 hover:text-black' >Publish</Button>
                </div>

            }
        </Card>
    )
}

export default BlogCard
