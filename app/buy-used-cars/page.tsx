import { carFilterSchema } from "@/lib/validators/filter";
import BuyUsedCars from "./components/BuyUsedCars";
import Filter from "./components/Filter";

export default async function page({
  searchParams,
}:{
  searchParams:Promise<{
    brand?:string;
    minPrice?:string;
    maxPrice?:string;
    year?:string;
  }>
}) {
  const rawParams=await searchParams;
  const parsed=carFilterSchema.safeParse(rawParams);
  const resolvedSearchParams=parsed.success ? parsed.data : {};
  return (
    <div className="bg-gray-100 text-gray-800">
    <div className="flex min-h-screen">
      <Filter/>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6">Available Cars</h1>
        <BuyUsedCars filters={resolvedSearchParams}/>
      </main>
    </div>
  </div>
  )
}