import { middleware } from "../middleware/auth.middleware";
import { createBlog, fetchBlogById, fetchBlogs, fetchMyBlogs, publishBlog, publishBlogDirect, updateBlog } from "../controller/blog.controller";
import { Router } from "express";



export default (router: Router)=>{
    router.post('/blogs/save-draft', middleware ,createBlog);
    router.post('/blogs/update-blog', middleware ,updateBlog);
    router.post('/blogs/publish', middleware, publishBlog);
    router.post('/blogs/publish-direct', middleware, publishBlogDirect);
    router.get('/blogs', fetchBlogs);
    router.get('/blogs/my',middleware ,fetchMyBlogs);
    router.get('/blogs/:id', fetchBlogById);
}