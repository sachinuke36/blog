import { Router } from "express";
import { getUser, login, logout, register } from "../controller/auth.controller";


export default (router: Router)=>{
    router.post('/auth/login',login);
    router.post('/auth/register', register);
    router.post('/auth/logout', logout);
    router.get('/auth/getuser',getUser);
}