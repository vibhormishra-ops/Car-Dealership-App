import { useQuery } from "@tanstack/react-query";

export type Car = {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType?: "PETROL" | "DIESEL" | "ELECTRIC";
  imageUrl: string;
};

async function fetchCars(): Promise<Car[]> {
  const res = await fetch("api/cars");
  if (!res.ok) {
    throw new Error("Failed to Fetch Cars");
  }
  return res.json();
}

export function useCars() {
  return useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
    staleTime: 1000 * 60, // 1 minute
  });
}
