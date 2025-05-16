import { User } from "@prisma/client";
import { prisma } from "../db/dbConfig";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export interface CustomRequest extends Request{
    user?: User
}


export async function middleware(req: CustomRequest, res: Response, next: NextFunction):Promise<any>{
    const token = req.cookies?.authtoken;
    if (!token) return res.status(401).json({ message: 'Unauthorized. No token provided.' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { email: string };
        const user = await prisma.user.findFirst({ where: { email: decoded.email } });
        if (!user) return res.status(404).json({ message: 'User not found.' });
        req.user = user;
        next()
    } catch (error) {
        console.log("Error in middleware: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}