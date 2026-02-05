"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

interface UIContextType {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}
const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const openLogin = useCallback(() => {
    setIsLoginOpen(true);
  }, []);

  const closeLogin = useCallback(() => {
    setIsLoginOpen(false);
  }, []);

  const value: UIContextType = useMemo(
    () => ({
      isLoginOpen,
      openLogin,
      closeLogin,
    }),
    [isLoginOpen, openLogin, closeLogin]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI(): UIContextType {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within UIProvider");
  }
  return context;
}
