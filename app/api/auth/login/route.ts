export const runtime = "nodejs";

import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/session";
// import { error } from "console";

interface LoginBody{
    username: string;
    password: string;
}

export async function POST(req: Request){
    try{
        const body: LoginBody= await req.json();
        const {username, password} = body;
        if(!username || !password){
            return NextResponse.json(
                {error: "Missing Credentials"},
                {status: 400}
            );
        }
        const existingUser= await prisma.user.findUnique({
            where: {username},
        });
        if(!existingUser){
            const passwordHash=await bcrypt.hash(password, 10);
            const newUser= await prisma.user.create({
                data: {
                    username,
                    passwordHash,
                }
            });
            return NextResponse.json({
                id: newUser.id,
                username: newUser.username,
            });
        }
        const isValid= await bcrypt.compare(
            password,
            existingUser.passwordHash
        );
        if(!isValid){
            return NextResponse.json(
                {error: "Invalid Credentials"},
                {status: 401}
            );
        }
        await createSession(existingUser.id);
        return NextResponse.json({
            id: existingUser.id,
            username: existingUser.username
        });
    }
    catch(error){
        console.error(error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        );
    }
}