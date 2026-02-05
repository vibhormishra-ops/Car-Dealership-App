"use client";

import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";
import Link from "next/link";
const Navbar = () => {
  const { user, logout } = useAuth();
  const { openLogin } = useUI();
  return (
    <div className="bg-white flex h-20 border-b items-center sticky top-0 z-9999 text-black justify-between p-4">
      <div className="flex gap-10">
        <Link href="/">
          <div className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2">
            Cars24
          </div>
        </Link>
        <Link href="/buy-used-cars">
          <div className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2">
            Buy Used Cars
          </div>
        </Link>
        <Link href="/sell-used-cars">
          <div className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2">
            Sell Used Cars
          </div>
        </Link>
      </div>
      {user ? (
        <div className="flex gap-8">
          <Link href={`/user-details/${user?.id}`}>
          <span className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2">
            {" "}
            Hi, {user?.username}
          </span>
          </Link>
          <button
            className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2"
            onClick={openLogin}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
export default Navbar;
