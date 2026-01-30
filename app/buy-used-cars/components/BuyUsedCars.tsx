import {prisma} from "@/lib/prisma";
import { Car } from "./Car";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../../Loading";
interface Filters{
        brand?: string;
        minPrice?: string;
        maxPrice?: string;
        year?: string;
}

export default async function BuyUsedCars({filters}:{filters:Filters}){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any={
        status: "AVAILABLE",
    };
    if(filters.brand){
        where.brand=filters.brand;
    }
    if(filters.year){
        where.year=Number(filters.year);
    }
    if(filters.minPrice || filters.maxPrice){
        where.price={};
        if(filters.minPrice)
            where.price.gte=Number(filters.minPrice);
        if(filters.maxPrice)
            where.price.lte=Number(filters.maxPrice);
    }
    const cars= await prisma.car.findMany({
        where,
        include: {
            seller: {
                select:{username: true}
            }
        },
        orderBy: {createdAt: "desc"}
    });
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense fallback={<Loading/>}>
            {cars.map((car)=>(
                <Link key= {car.id} href={`/buy-used-cars/${car.id}`}>
                    <Car  id={car.id} title={car.title} brand={car.brand} model={car.model} year={car.year} price={car.price} mileage={car.mileage} imageURL={car.imageURL}/>
                </Link>
            ))}
            </Suspense>
        </div>
    )
}