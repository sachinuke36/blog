import { Router } from "express";
import authRoute from "./auth.route";
import blogRoute from "./blog.route";

const router =  Router();


export default ():Router=>{
    authRoute(router);
    blogRoute(router);
    return router
}