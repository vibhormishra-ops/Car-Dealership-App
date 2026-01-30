import { getSessionUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(){
    const user=await getSessionUser();
    if(!user) return NextResponse.json(null);
    return NextResponse.json({
        id: user.id,
        name:user.username,
    });
}