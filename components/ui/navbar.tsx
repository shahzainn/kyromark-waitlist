import React from "react";
 
export default function Navbar() {
  return (
    <nav className="text-black p-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
        <img src="/logo.svg" alt="Kyromark Logo" className="w-[199px] h-[40px] sm:w-[150px] sm:h-[30px] md:w-[199px] md:h-[40px]" />
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </nav >
  );
}
