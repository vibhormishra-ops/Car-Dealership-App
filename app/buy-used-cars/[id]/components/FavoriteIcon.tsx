"use client";
import { useOptimistic, startTransition } from "react";
import { useState, useCallback } from "react";

interface Props {
  carId: string;
  initialFavorited: boolean;
  disabled?: boolean;
}

// const user=await getSessionUser();
export default function FavoriteIcon({
  carId,
  initialFavorited,
  disabled = false,
}: Props) {
  const [confirmedFavorited, setConfirmedFavorited] =
    useState(initialFavorited);
  const [optimisticFavorited, setOptimisticFavorited] = useOptimistic(
    confirmedFavorited,
    (_, next: boolean) => next,
  );

  const toggleFavorite = useCallback(async () => {
    if (disabled) return;
    const nextValue = !optimisticFavorited;
    console.log(carId);
    startTransition(() => {
      setOptimisticFavorited(nextValue);
    });
    const res = await fetch("/api/favorites/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ carId }),
    });
    if (!res.ok) {
      startTransition(() => {
        setOptimisticFavorited(confirmedFavorited);
      });
      return;
    }
    setConfirmedFavorited(nextValue);
  }, [disabled, optimisticFavorited, carId, setOptimisticFavorited, confirmedFavorited]);

  return (
    <button
      onClick={toggleFavorite}
      disabled={disabled}
      className={` p-4 rounded-4xl text-2xl transition ${optimisticFavorited ? "text-red-500" : "text-gray-400"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-label="Toggle Favorite"
    >
      {optimisticFavorited ? "❤️" : "🩶"}
    </button>
  );
}
