"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { customStyles } from '@/utils/CustomStyles'
import React from 'react'
import Select from "react-select";


const CreateBlog = () => {
    const options = [
        { value: "blog", label: "Blog" },
        { value: "news", label: "News" },
        { value: "tutorial", label: "Tutorial" },
    ];


    return (
        <div>
            <h4 className='text-xl font-bold p-3'>Create a blog</h4>
            <div className='w-[60%] mx-auto mt-10'>
                <form className='space-y-6'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='title'>Title</Label>
                        <Input type='text' />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <Label htmlFor='content'>Content</Label>
                        <Textarea className="max-h-60 h-60 overflow-y-auto"/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='tags'>Tags</Label>
                        <div className="w-full max-w-sm">
                            <Select isMulti styles={customStyles} options={options} placeholder="Select category" />
                        </div>
                    </div>
                    <div className='flex justify-end gap-4'>
                        <Button type='submit' variant={'secondary'} className='bg-blue-600 text-white'>Save</Button>
                        <Button type='submit' variant={'secondary'} className='bg-indigo-600 text-white'>Publish</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
