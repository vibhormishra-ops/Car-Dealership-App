"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/buy-used-cars?${params.toString()}`);
  };
  return (
    <div className="w-72 bg-white border-r p-6">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      <select
        className="border px-3 py-2 rounded mb-6"
        onChange={(e) => updateParam("brand", e.target.value)}
        defaultValue={searchParams.get("brand") ?? ""}
      >
        <option value="">All Brands</option>
        <option value="Honda">Honda</option>
        <option value="Hyundai">Hyundai</option>
        <option value="MarutiSuzuki">Maruti Suzuki</option>
        <option value="Toyota">Toyota</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        className="border px-3 py-2 rounded mb-6"
        defaultValue={searchParams.get("minPrice") ?? ""}
        onBlur={(e) => updateParam("minPrice", e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border px-3 py-2 rounded mb-6"
        defaultValue={searchParams.get("maxPrice") ?? ""}
        onBlur={(e) => updateParam("maxPrice", e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        className="border px-3 py-2 rounded mb-6"
        defaultValue={searchParams.get("year") ?? ""}
        onBlur={(e) => updateParam("year", e.target.value)}
      />
    </div>
  );
}
