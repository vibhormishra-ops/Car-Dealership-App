import {prisma} from "@/lib/prisma"
import { getSessionUser } from "@/lib/session"
import { NextResponse } from "next/server"

export async function POST(req:Request){
    const user=await getSessionUser();
    console.log(user?.username);
    if(!user){
        return NextResponse.json({error:"Unauthorized"},{status:401})
    }
    const {carId}=await req.json();
    if(!carId){
        return NextResponse.json({error:"Missing CarId"},{status:400});
    }
    const existing= await prisma.favorite.findUnique({
        where:{
            userId_carId:{
                userId:user.id,
                carId
            },
        },
    })
    if(existing){
        await prisma.favorite.delete({where:{id:existing.id}});
        return NextResponse.json({favorited:false})
    }
    await prisma.favorite.create({
        data:{userId:user.id, carId},
    })
    return NextResponse.json({favorited:true});
}