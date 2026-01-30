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
    if(!sessionId) return null;
    const session= await prisma.session.findUnique({
        where:{id: sessionId},
        include:{user:true}
    });
    if(!session || session.expiresAt<new Date()){
        return null;
    }
    return session.user;
}

export async function destroySession(){
    const sessionId=(await cookies()).get(SESSION_COOKIE)?.value;
    if(!sessionId) return;
    await prisma.session.delete({
        where:{id:sessionId}
    });
    (await cookies()).delete(SESSION_COOKIE);
}