"use client";
import { useState, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";

type FormData = {
  title: string;
  brand: string;
  model: string;
  imageURL: string;
  year: string;
  price: string;
  mileage: string;
  color: string;
  description: string;
};

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

  const handleSubmit = useCallback(async () => {
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
  }, [user, form]);

  const handleInputChange = useCallback(
    (key: string, value: string) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  return (
    <div className="max-w-xl mx-auto p-6 text-black">
      <h1 className="text-2xl font-semibold mb-4 text-black">Sell Your Car</h1>
      <div className="space-y-3">
        {(Object.keys(form) as Array<keyof FormData>).map((key) => (
          <input
            key={key}
            placeholder={key}
            className="w-full border px-3 py-2 rounded text-black"
            value={form[key]}
            onChange={(e) => handleInputChange(key, e.target.value)}
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