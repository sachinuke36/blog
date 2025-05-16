import { User } from "@prisma/client";
import { genSalt } from "bcryptjs";
import { prisma } from "../db/dbConfig";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export async function login(req: Request, res: Response):Promise<any>{
    const { email, password } = req.body;
    if(!email || !password) return res.json({message: 'Missing fields!'});
    try {
        const user = await prisma.user.findFirst({where:{email}});
        if(!user) return res.status(404).json({message:"User not found!"});
        const { password: _, ...userWithoutPassword } = user;
        return setCookies(userWithoutPassword, res);
    } catch (error) {
        console.log("Error in login!", error)
    }
}

export async function register(req: Request, res: Response):Promise<any>{
        const { email, name, password } = req.body;
        if(!email || !name || !password) return res.json({message:"Missing fields!"});
        try {
            const user = await prisma.user.findFirst({where: {email}});
            if(user) return res.json({message:'User already exists with this email address!'});
            const salt = await genSalt(10);
            const hashedPass = await bcrypt.hash(password,salt);
            const response = await prisma.user.create({data:{ email, name, password: hashedPass}});
            console.log(response);
            const newUser = await prisma.user.findFirst({where: {email}});
            return res.status(201).json({message: "Registration successful", user: newUser});
        } catch (error) {
            console.log("Error in registration!", error);
        }
}

export async function logout(req: Request, res: Response):Promise<any>{
    try {
        res.clearCookie('authtoken');
        return res.status(200).json({message:'Logout successfull!'});
    } catch (error) {
        console.log("Error in logout!: ", error);
        return res.status(500).json({message:" Internal server error!"});
    }
}

export async function setCookies(user: Omit<User, 'password'>, res:Response):Promise<any>{
    const JWT_SECRET = process.env.JWT_SECRET as string
    const token = await jwt.sign({email:user.email},JWT_SECRET,{expiresIn:"1d"});
    return res.status(200).cookie('authtoken',token).json(user);
}
