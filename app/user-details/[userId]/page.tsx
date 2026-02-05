
//fetch to /api/users/route with method get which will then call user to get its details.
import { notFound } from "next/navigation";
import { userParamsValidationSchema } from "@/lib/validators/user";
import {prisma} from "@/lib/prisma"
import { Car } from "@/app/buy-used-cars/components/Car";

export default async function page({params}:{params:Promise<{id:string}>}){
    const rawParams=await params;
    const parsed=userParamsValidationSchema.safeParse(rawParams);
    if(!parsed.success){
        console.log("Not found");
        notFound();
    }
    const {userId}=parsed.data;
    const user= await prisma.user.findUnique({
            where:{id: userId},
            include:{ favorites: true, cars: true}
        })
  return (
    <div className="bg-gray-100 text-black flex flex-col gap-10 p-10">
      <h1 className="text-3xl font-bold">Details of the User</h1>
      <p className="text-3xl font-bold">{user?.username}</p>
      <h1 className="text-3xl font-bold">Cars Owned</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {user?.cars.map((car)=>(
          <Car
              key={car.id}
              id={car.id}
              title={car.title}
              brand={car.brand}
              model={car.model}
              year={car.year}
              price={car.price}
              mileage={car.mileage}
              imageURL={car.imageURL}
            />
        ))}
      </div>
    </div>

  )
}