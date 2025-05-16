import jwt from "jsonwebtoken";
import { prisma } from "../db/dbConfig";
import { Request, Response } from "express";
import { CustomRequest } from "../middleware/auth.middleware";


export async function createBlog(req: CustomRequest , res: Response):Promise<any>{
    const { title, content, tags } = req.body;
    const author = req?.user?.id;
    if(!title || !content || !author || !tags) return res.json({message:'Missing fields!'});
    try {
        const response = await prisma.blog.create({data:{
            title, content, author, tags, status:'DRAFT'
        }});
        return res.status(200).json({message: 'Blog saved successfully',data: response});
    } catch (error) {
        console.log("Error in creating blog: ",error);
        return res.status(500).json({message:"Internal server error"});
    }

}

export async function updateBlog(req: CustomRequest, res: Response):Promise<any>{
    const {id ,title, content, tags} = req.body;
    const author = req?.user?.id;
    if(!id) return res.status(400).json({message: "Missing blog id"});
    try {
        const blog = await prisma.blog.findUnique({where: { id }});
        if(!blog) return res.status(404).json({message: "No such blog found!"});
        if(blog.author !== author) return res.status(403).json({ message: 'You are not authorized to perform this action.' });
        const response = await prisma.blog.update({where: {id},data:{
            title, content, tags
        }});
        return res.json({message: "Blog updated!", data: response});
    } catch (error) {
        console.log("Error in updating blog..");
        return res.status(500).json({message:'Internal server error!'})
    }
}

export async function publishBlog(req: CustomRequest, res: Response):Promise<any>{
    const {id ,title, content, tags} = req.body;
    const author = req?.user?.id;
    if(!id) return res.status(400).json({message: "Missing blog id"});
    try {
        const blog = await prisma.blog.findUnique({where: { id }});
        if(!blog) return res.status(404).json({message: "No such blog found!"});
        if(blog.author !== author) return res.status(403).json({ message: 'You are not authorized to perform this action.' });
        const response = await prisma.blog.update({where: {id},data:{
            title, content, tags, status:'PUBLISHED'
        }});
        return res.json({message: "Blog published!", data: response});
    } catch (error) {
        console.log("Error in publishing blog..");
        return res.status(500).json({message:'Internal server error!'})
    }
}

export async function fetchBlogs(req: Request, res: Response):Promise<any>{
    try {
        const response = await prisma.blog.findMany({where:{ status: 'PUBLISHED'}});
        return res.status(201).json({message:'Fetched all blogs successfully!', data: response});
    } catch (error) {
        console.log("Error in fetching blogs");
        return res.status(500).json({message:'Internal server error!'})
    }
}

export async function fetchBlogById(req: Request, res: Response):Promise<any>{
    const { id: blogId } = req.params;
    try {
        if(!blogId) return res.json({message: "Missing blog id"});
        const response = await prisma.blog.findUnique({where:  { id: blogId, status: 'PUBLISHED'} });
        return res.status(201).json({message:"Fetched blog successfully!", data: response});
    } catch (error) {
        console.log("Error in fetchig blog by id");
        return res.status(500).json({message:"Internal server error!"});
    }
}

export async function fetchMyBlogs(req: CustomRequest, res: Response):Promise<any>{
    try {
        const user = req?.user;
        if(!user) return res.status(404).json({message:'User not found!'});
        const response = await prisma.blog.findMany({where:{ author: user.id }});
        return res.status(201).json({message:'Fetched all blogs successfully!', data: response});
    } catch (error) {
        console.log("Error in fetching blogs");
        return res.status(500).json({message:'Internal server error!'})
    }
}

