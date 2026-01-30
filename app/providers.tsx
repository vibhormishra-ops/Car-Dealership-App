'use client'
import { AuthProvider } from "@/context/AuthContext"
import { UIProvider } from "@/context/UIContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {useState} from "react"
export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <UIProvider>
      {children}
      </UIProvider>
      </AuthProvider>
    </QueryClientProvider>
    
  )
}