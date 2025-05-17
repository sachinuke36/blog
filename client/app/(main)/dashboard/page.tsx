"use client"
import BlogCard from '@/components/BlogCard';
import Scroller from '@/components/Scroller';
import { Card } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Blog, myblogs } from '@/lib/data';
import React, { useState } from 'react'

const Dashboard = () => {
  const [myBlogs, setMyBlogs] = useState<Blog[]>(myblogs);

  return (
<div className='h-full box-border'>
    <h3 className='p-3 text-2xl font-bold'>Dashboard</h3>

    {/* published blogs */}
   <Scroller myBlogs={myBlogs.filter((blog)=> blog.status === 'PUBLISHED')} Title='Published blogs'/>

   <Scroller myBlogs={myBlogs.filter((blog)=>blog.status === 'DRAFT')} Title='Draft'/>


    {/* drafts */}
     
</div>      
  )
}

export default Dashboard
