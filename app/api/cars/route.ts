import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
export async function POST(req: Request){
  try{
    const body=await req.json();
    const {
      title,
      brand,
      year,
      price,
      mileage,
      color,
      model,
      description,
      sellerId,
      imageURL
    }=body;
    if(!title || !brand || !year || !price || !mileage ||!sellerId || !model || !imageURL){
      return NextResponse.json(
        {error:"Missing Required Fields"},
        {status: 400}
      );
    }
    const car= await prisma.car.create({
      data: {
        title,
        brand,
        year,
        price,
        mileage,
        color,
        model,
        description,
        sellerId,
        imageURL,
      }
    });
    return NextResponse.json(car);
  }
  catch(error){
    console.error(error);
    return NextResponse.json(
      {error: "Failed to create Car"},
      {status: 500}
    );
  }
}

export async function GET(){
  try{
    const cars=await prisma.car.findMany({
      where: {status: "AVAILABLE"},
      include: {
        seller:{
          select:{
            id:true,
            username: true,
          },
        },
      },
      orderBy:{
        createdAt: "desc"
      }
    });
    return NextResponse.json(cars);
  }
  catch(error){
    console.error(error);
    return NextResponse.json(
      {error: "Failed to fetch cars"},
      {status: 500}
    );
  }
}