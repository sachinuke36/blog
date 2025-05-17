"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { customStyles } from '@/utils/CustomStyles'
import React, { useState } from 'react'
import CreatableSelect from "react-select/creatable";
import { toast } from 'sonner'

type options={
    value: string,
    label: string
}

const CreateBlog = () => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const [action, setAction] = useState<"save" | "publish">('save');
    const backendUrl = 'http://localhost:8000'
    
    

    const [tags, setTags] = useState<options[]>([
        { value: "blog", label: "Blog" },
        { value: "news", label: "News" },
        { value: "tutorial", label: "Tutorial" },]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const tagValues = tags.map((tag)=>tag.value); 
        try {
            if(action === 'save'){
                console.log(action)
                const response = await fetch(backendUrl + '/api/blogs/save-draft',{
                method:"POST",
                headers: {"Conten-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({title, content, tags: tagValues})
            });
            console.log(response);
            const { data, message } = await response.json();
            toast(message);
            }else{
                console.log(action)
                const response = await fetch(backendUrl + '/api/blogs/publish-direct',{
                method:"POST",
                headers: {"Conten-Type":"application/json"},
                credentials: 'include',
                body: JSON.stringify({title, content, tags: tagValues})
            });
            console.log(response);
            const { data, message } = await response.json();
            toast(message);
            }
        } catch (error) {
                toast.error((error as Error)?.message || "Something went wrong.");
                console.log(error)
        }
        
    };
    
    
    return (
        <div>
            <h4 className='text-xl font-bold p-3'>Create a blog</h4>
            <div className='w-[60%] mx-auto mt-10'>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='title'>Title</Label>
                        <Input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <Label htmlFor='content'>Content</Label>
                        <Textarea value={content} onChange={(e)=>setContent(e.target.value)} className="max-h-60 h-60 overflow-y-auto"/>
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
                             }}
                             onChange={(selected)=>setTags(selected as options[])}
                             placeholder="Select category" />
                        </div>
                    </div>
                    <div className='flex justify-end gap-4'>
                        <Button type='submit' onClick={()=>setAction('save')} variant={'secondary'} className='bg-blue-600 text-white'>Save</Button>
                        <Button type='submit' onClick={()=>setAction('publish')} variant={'secondary'} className='bg-indigo-600 text-white'>Publish</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
