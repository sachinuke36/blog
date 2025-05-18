import { Blog } from '@/lib/data'
import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import BlogDate from './BlogDate'
import BlogAction from '@/hooks/useBlog'
import { Loader2 } from 'lucide-react'
import { useAppContext } from '@/contexts/AppContext'
import { useRouter } from 'next/navigation'

const BlogCard = ({ blog }: { blog: Blog }) => {
    const { setSelected, selected } = useAppContext()
    const {publish_blog, loading} = BlogAction();
    const router  = useRouter();

    const handleEdit = (blog: Blog)=>{
        setSelected(blog);
        router.push('/create-blog');
    }

    return (
        <Card className='flex flex-col h-[250px]  w-[350px] border-none text-white shadow shadow-orange-300 gap-3 bg-[#353535ee]' >
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
            {
                blog.status === "DRAFT" && <div className='flex px-2 justify-between'>
                    <Button onClick={()=>handleEdit(blog)} className='shadow-sm shadow-blue-400 hover:bg-blue-400 hover:text-black'>Edit</Button>
                    <Button disabled={loading} onClick={()=>publish_blog(blog)} className='shadow-sm shadow-indigo-300 hover:bg-indigo-400 hover:text-black' >
                        { loading ? <div className="flex gap-2 items-center justify-center">
                    <Loader2 className="animate-spin" /> 
                    <div>Publishing..</div>
            </div> : <div>Publish</div>}</Button>
                </div>

            }
        </Card>
    )
}

export default BlogCard
