import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { sellCarSchema } from '@/lib/validators/car';
export async function POST(req: Request){
  try{
    const body=await req.json();
    const parsed=sellCarSchema.safeParse(body);
    if(!parsed.success){
      return NextResponse.json(
        {errors:"Bad Request"},
        {status:400}
      );
    }
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
    }=parsed.data;
    // if(!title || !brand || !year || !price || !mileage ||!sellerId || !model || !imageURL){
    //   return NextResponse.json(
    //     {error:"Missing Required Fields"},
    //     {status: 400}
    //   );
    // }
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