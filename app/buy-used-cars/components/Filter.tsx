"use client";
import useURLParams from "@/app/hooks/useURLParams";

export default function Filter() {
  const {updateParam, getParam}=useURLParams();
  return (
    <div className="w-72 bg-white border-r p-6">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      <select
        className="border px-3 py-2 rounded mb-6"
        onChange={(e) => updateParam("brand", e.target.value)}
        defaultValue={getParam("brand")}
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
        defaultValue={getParam("minPrice")}
        onBlur={(e) => updateParam("minPrice", e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border px-3 py-2 rounded mb-6"
        defaultValue={getParam("maxPrice")}
        onBlur={(e) => updateParam("maxPrice", e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        className="border px-3 py-2 rounded mb-6"
        defaultValue={getParam("year")}
        onBlur={(e) => updateParam("year", e.target.value)}
      />
    </div>
  );
}
