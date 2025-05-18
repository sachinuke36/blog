import { useAppContext } from '@/contexts/AppContext';
import { Blog } from '@/lib/data';
import React, { useState } from 'react'
import { toast } from 'sonner';

const BlogAction = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { backendUrl, setAllBlogs, setAllMyBlogs } = useAppContext();

    const publish_blog = async ({ id, title, content, tags }: { id: string, title: string, content: string, tags: string[] }) => {
        setLoading(true);
        try {
            const response = await fetch(backendUrl + '/api/blogs/publish', {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, title, content, tags })
            });
            const { data, message } = await response.json();
            console.log(message);
            setAllBlogs((prev: Blog[]) => [...prev, data]);
            setAllMyBlogs((prev: Blog[]) => {
              const index = prev.findIndex(blog => blog.id === id);
              if (index === -1) return prev;
                    const updated = [...prev];
                    updated[index] = { ...updated[index], status: 'PUBLISHED' };
                    return updated;
                });
            toast(message);
        } catch (error) {
            console.log(error);
            toast("Error in publishing the blog")
        } finally {
            setLoading(false);
        }
    }

    const save_blog= async({ title, content, tags }: { title: string, content: string, tags: string[] })=>{
         setLoading(true);
        try {
            const response = await fetch(backendUrl + '/api/blogs/save-draft',{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({title, content, tags})
            });
            const { data, message } = await response.json();
            setAllBlogs((prev: Blog[])=> [...prev, data]);
            setAllMyBlogs((prev: Blog[])=> [...prev, data]);
            toast(message);
            return data;
        } catch (error: any) {
            console.log(error);
            toast((error as Error)?.message || "Something went wrong.");
        }finally{
            setLoading(false);
        }
    }

    const publish_direct = async({ title, content, tags }: { title: string, content: string, tags: string[] })=>{
        setLoading(true);
        try {
            const response = await fetch(backendUrl + '/api/blogs/publish-direct',{
                            method:"POST",
                            headers: {"Content-Type":"application/json"},
                            credentials: 'include',
                            body: JSON.stringify({title, content, tags})
                        });
                        const { data, message } = await response.json();
                        setAllMyBlogs((prev: Blog[])=> [...prev, data]);
                        toast(message);
        } catch (error: any) {
            console.log(error);
            toast((error as Error)?.message || "Something went wrong.");
        }finally{
            setLoading(false);
        }
    }

   const update_blog = async ({ id ,title, content, tags }: { id: string ,title: string, content: string, tags: string[] })=>{
         setLoading(true);
        try {
            const response = await fetch(backendUrl + '/api/blogs/update-blog',{
                            method:"POST",
                            headers: {"Content-Type":"application/json"},
                            credentials: 'include',
                            body: JSON.stringify({title, content, tags, id})
                        });
                        const { data, message } = await response.json();
                        setAllMyBlogs((prev: Blog[])=> {
                           const Index = prev.findIndex((blog)=>blog.id == id);
                           if (Index === -1) return prev;
                           const updated = [...prev];
                           updated[Index] = {...updated[Index], title, content, tags};
                           return updated;
                        });
                        toast(message);
        } catch (error: any) {
            console.log(error);
            toast((error as Error)?.message || "Something went wrong.");
        }finally{
            setLoading(false);
        }
   }


    return (
        { loading, publish_blog, update_blog, save_blog, publish_direct }
    )
}

export default BlogAction
