"use client"
import { useOptimistic, startTransition } from "react"
import { useState } from "react";
interface Props{
    carId: string;
    initialFavorited: boolean;
    disabled?: boolean;
}

export default function FavoriteIcon({carId, initialFavorited, disabled=false}: Props){
    const [confirmedFavorited,setConfirmedFavorited]=useState(initialFavorited);
    const [optimisticFavorited, setOptimisticFavorited]=useOptimistic(confirmedFavorited, (_,next: boolean)=>next);
    const toggleFavorite= async ()=> {
        if(disabled) return;
        const nextValue=!optimisticFavorited;
        
        startTransition(()=> { setOptimisticFavorited(nextValue)});
        console.log(optimisticFavorited);
        const res=await fetch("/api/favorites/toggle", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({carId}),
        });
        console.log("what is the result " + res.ok);
        if(!res.ok){
            startTransition(()=> { setOptimisticFavorited(confirmedFavorited)});
            return;
        }
        setConfirmedFavorited(nextValue);
    };
    return(
        <button onClick={toggleFavorite} disabled={disabled} className={` p-4 rounded-4xl text-2xl transition ${optimisticFavorited? "text-red-500": "text-gray-400"} ${disabled? "opacity-50 cursor-not-allowed": ""}`} aria-label="Toggle Favorite">
            {optimisticFavorited? "❤️":"🩶"}
        </button>
    )
}