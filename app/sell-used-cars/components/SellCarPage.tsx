"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const SellCarPage = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    brand: "",
    model: "",
    imageURL: "",
    year: "",
    price: "",
    mileage: "",
    color: "",
    description: "",
  });
  const handleSubmit = async () => {
    if (!user) return alert("Please Login");

    const res = await fetch("/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        year: Number(form.year),
        price: Number(form.price),
        mileage: Number(form.mileage),
        sellerId: user.id,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error(data);
      alert("Error: " + data.error);
      return;
    }
    alert("Car Listed Successfully");
  };
  return (
    <div className="max-w-xl mx-auto p-6 text-black">
      <h1 className="text-2xl font-semibold mb-4 text-black">Sell Your Car</h1>
      <div className="space-y-3">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            placeholder={key}
            className="w-full border px-3 py-2 rounded text-black"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value={(form as any)[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-5 w-full bg-blue-600 text-white font-extrabold py-2 rounded hover:bg-orange-400 hover:shadow-2xl"
      >
        Post Car
      </button>
    </div>
  );
};

export default SellCarPage;
