"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useAppContext } from '@/contexts/AppContext'
import { useUser } from '@/hooks/getUser'
import BlogAction from '@/hooks/useBlog'
import { Blog } from '@/lib/data'
import { customStyles } from '@/utils/CustomStyles'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import CreatableSelect from "react-select/creatable";
import { toast } from 'sonner'

type options={
    value: string,
    label: string
}

const CreateBlog = () => {
    const {  backendUrl, user,  loading, allBlogs, setAllBlogs, setAllMyBlogs, selected} = useAppContext();
    const { update_blog, save_blog, publish_direct } = BlogAction();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [action, setAction] = useState<"save" | "publish" | "update">('save');
    const [isDirty, setIsDirty] = useState(false);
    const [savedBlogId, setSavedBlogId] = useState<string | null>(null);


    const [tags, setTags] = useState<options[]>([]);

 const updateTags = (tags: string[])=>{
    const newTags = tags?.map((tag)=>({value: tag, label: tag}))
    return newTags;
 }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const tagValues = tags.map((tag)=>tag.value); 
        switch(action){
            case 'save' : return await save_blog({ title, content, tags: tagValues });
            case 'publish' : return await publish_direct({ title, content, tags: tagValues });
            case 'update' : return await update_blog({ id: selected.id ,title, content, tags: tagValues });
            default:  break;
        }
    };

    useEffect(() => {
    if (selected) {
        setTitle(selected.title);
        setContent(selected.content);
        setTags(updateTags(selected.tags));
    }
}, [selected]);

useEffect(() => {
  const interval = setInterval(async() => {
    if (!title.trim() || !content.trim() || !isDirty) return;

    const tagValues = tags.map(tag => tag.value);

    if (selected) {
      await update_blog({ id: selected.id, title, content, tags: tagValues });
    } else if (savedBlogId) {
     await update_blog({ id: savedBlogId, title, content, tags: tagValues });
    } else {
    await  save_blog({ title, content, tags: tagValues }).then((data) => {
        if (data?.id) {
          setSavedBlogId(data.id); 
        }
      });
    }
    setIsDirty(false);
    toast.info("Auto-saved");
  }, 5000);

  return () => clearInterval(interval);
}, [title, content, tags, isDirty, selected, savedBlogId]);




      if(loading) return <div className='flex justify-center mt-[200px] p-2 '> <Loader2 size={100} color='orange' className="animate-spin text-2xl" /> </div>
      if(!user) return <div className='mt-[200px]'> <h2 className='text-2xl p-5 text-center'> Please login !</h2> </div>

    return (
        <div>
            <h4 className='text-xl font-bold p-3'>Create a blog</h4>
            <div className='w-[60%] mx-auto mt-10'>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='title'>Title</Label>
                        <Input type='text' value={title} onChange={(e)=>{ setTitle(e.target.value); setIsDirty(true); }} />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <Label htmlFor='content'>Content</Label>
                        <Textarea value={content} onChange={(e)=>{ setContent(e.target.value); setIsDirty(true); }} className="max-h-60 h-60 overflow-y-auto"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='tags'>Tags</Label>
                        <div className="w-full max-w-sm">
                            <CreatableSelect isMulti
                             styles={customStyles} 
                             options={tags}
                             value={tags}
                             onCreateOption={(input)=>{
                                const newOption = { value: input, label: input};
                                setTags(prev=>[...prev, newOption]);
                                setIsDirty(true);
                             }}
                             onChange={(selected)=>{ setTags(selected as options[]); setIsDirty(true); }}
                             placeholder="Select category" />
                        </div>
                    </div>
                    <div className='flex justify-end gap-4'>
                        {
                            selected ? <Button type='submit' onClick={()=>setAction('update')} variant={'secondary'} className='bg-blue-600 text-white'>Update</Button> :
                                        <Button type='submit' onClick={()=>setAction('save')} variant={'secondary'} className='bg-blue-600 text-white'>Save</Button>


                        }
                        <Button type='submit' onClick={()=>setAction('publish')} variant={'secondary'} className='bg-indigo-600 text-white'>Publish</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
