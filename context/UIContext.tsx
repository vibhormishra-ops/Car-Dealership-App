"use client"
import { createContext, ReactNode, useContext, useState } from "react";
interface UIContextType{
    isLoginOpen: boolean;
    openLogin: ()=> void;
    closeLogin: ()=>void;
}
const UIContext=createContext<UIContextType| undefined>(undefined);

export function UIProvider({children}:{children: ReactNode}){
    const [isLoginOpen,setIsLoginOpen]=useState<boolean>(false);
    const value: UIContextType={
        isLoginOpen,
        openLogin: ()=>setIsLoginOpen(true),
        closeLogin: ()=>setIsLoginOpen(false),
    }
    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    )
}

export function useUI(): UIContextType{
    const context=useContext(UIContext);
    if(!context){
        throw new Error("useUI must be used within UIProvider")
    }
    return context;
}