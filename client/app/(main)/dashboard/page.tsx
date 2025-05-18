"use client"
import BlogCard from '@/components/BlogCard';
import Scroller from '@/components/Scroller';
import { Card } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useAppContext } from '@/contexts/AppContext';
import { useUser } from '@/hooks/getUser';
import { Blog, myblogs } from '@/lib/data';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const {  backendUrl, user,  loading, setAllBlogs, allBlogs, allMyBlogs } = useAppContext();
  // const [myBlogs, setMyBlogs] = useState<Blog[]>(allMyBlogs);

  if(loading) return <div className='flex justify-center mt-[200px] p-2 '> <Loader2 size={100} color='orange' className="animate-spin text-2xl" /> </div>
  if(!user) return <div className='mt-[200px]'> <h2 className='text-2xl p-5 text-center'> Please login !</h2> </div>

  return (
<div className='h-full box-border'>
    <h3 className='p-3 text-2xl font-bold'>Dashboard</h3>

    {/* published blogs */}
   <Scroller myBlogs={allMyBlogs?.filter((blog: Blog)=> blog?.status === 'PUBLISHED')} Title='Published blogs'/>

   <Scroller myBlogs={allMyBlogs?.filter((blog: Blog)=>blog?.status === 'DRAFT')} Title='Draft'/>


    {/* drafts */}
     
</div>      
  )
}

export default Dashboard
