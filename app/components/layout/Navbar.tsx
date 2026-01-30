'use client'

import { useAuth } from "@/context/AuthContext"
import { useUI } from "@/context/UIContext";
import Link from "next/link";
const Navbar = () => {
  //this function will essentially return the login modal that will be displayed and blur will open up on rest of the app.
  const {user,logout}= useAuth();
  const {openLogin}= useUI();
  console.log(user?.username);
  return (
    <div className='bg-white flex h-20 border-b items-center sticky top-0 z-9999 text-black justify-between p-4'>
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
         {
          user ? (
            <div className="flex gap-8">
                <span className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2"> Hi, {user?.username}</span>
                <button className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2" onClick={logout}>Logout</button>
            </div>
            
          ): (
            <div className="flex gap-4">
                <button className="text-black text-xl font-bold hover:text-blue-600 hover:border-b-blue-600 hover:border-b-2" onClick={openLogin}>Login</button>
            </div>
          )
         }
         
    </div>

  )
}


//create a context based on which stores userLoggedIn if user has not logged in navbar shows login button which will open up a modal and blur rest of the screen when opened up, if user is logged in then we will just display the user details in the navbar like "Hello, {user}"
export default Navbar