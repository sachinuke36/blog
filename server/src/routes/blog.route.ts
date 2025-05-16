import { middleware } from "../middleware/auth.middleware";
import { createBlog, fetchBlogById, fetchBlogs, fetchMyBlogs, publishBlog, updateBlog } from "../controller/blog.controller";
import { Router } from "express";



export default (router: Router)=>{
    router.post('/blogs/save-draft', middleware ,createBlog);
    router.post('/blogs/update-blog', middleware ,updateBlog);
    router.post('/blogs/publish', middleware, publishBlog);
    router.get('/blogs', fetchBlogs);
    router.get('/blogs/:id', fetchBlogById);
    router.get('/blogs/my', fetchMyBlogs);


}