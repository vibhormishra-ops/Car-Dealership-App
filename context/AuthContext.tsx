"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface User{
    id: string;
    username: string;
}
interface AuthContextType{
    user: User | null;
    login: (user: User)=> void;
    logout: ()=> Promise<void>;
}
const AuthContext=createContext<AuthContextType| undefined>(undefined);

// export function AuthProvider({children}:{children: ReactNode}){
//     const [user, setUser]=useState<User | null>(null);
//     const value: AuthContextType={
//         user,
//         login: (userData)=>setUser(userData),
//         logout: ()=> setUser(null),
//     }
//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

export function AuthProvider({
    children
}:{children: ReactNode}){
    const router=useRouter();
    const [user,setUser]=useState<User | null>(null);
    useEffect(()=>{
        fetch("api/auth/me")
        .then((res)=> res.json())
        .then((data)=>{
            if(data) setUser(data);
        })
        .catch(()=>setUser(null))
    },[]);
    const login=(user: User)=>{
        setUser(user);
    }
    const logout= async()=>{
        await fetch("api/auth/logout", {method:"POST"});
        setUser(null);
        router.refresh();
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
    )
}

export function useAuth(): AuthContextType{
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context;
}