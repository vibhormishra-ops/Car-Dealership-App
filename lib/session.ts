import { cookies } from "next/headers";
import {prisma} from "@/lib/prisma"
import { randomUUID } from "crypto";

const SESSION_COOKIE="session_id";

export async function createSession(userId: string){
    const expiresAt= new Date();
    expiresAt.setDate(expiresAt.getDate()+7);
    const session=await prisma.session.create({
        data:{
            id: randomUUID(),
            userId,
            expiresAt,
        },
    });
    console.log("session id during login "+session.id);
    (await cookies()).set({
        name: SESSION_COOKIE,
        value: session.id,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV==="production",
        expires: expiresAt,
        path: "/"
    });
}

export async function getSessionUser(){
    const sessionId=(await cookies()).get(SESSION_COOKIE)?.value;
    console.log("sessionID during task "+ sessionId);
    if(!sessionId) return null;
    const session= await prisma.session.findUnique({
        where:{id: sessionId},
        select:{
            expiresAt:true,
            user:{
                select:{
                    id: true,
                    username: true,
                },
            },
        }
    });
    if(!session){
        return null;
    }
    if(session.expiresAt<new Date()){
        await prisma.session.delete({
            where:{id:sessionId},
        });
    }
    return session.user;
}

export async function destroySession(){
    const sessionId=(await cookies()).get(SESSION_COOKIE)?.value;
    console.log("sessionID during logout "+ sessionId);
    if(!sessionId) return;
    await prisma.session.delete({
        where:{id:sessionId}
    });
    (await cookies()).delete(SESSION_COOKIE);
}