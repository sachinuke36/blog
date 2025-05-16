import { Router } from "express";
import { login, logout, register } from "../controller/auth.controller";


export default (router: Router)=>{
    router.post('/auth/login',login);
    router.post('/auth/register', register);
    router.post('/auth/logout', logout)
}