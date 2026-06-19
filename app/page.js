"use client";
import { useState } from 'react';
import { motion } from "framer-motion";



export default function Page() {

  return (
    <>
<div className="w-full">
  {/* TOP ROW: Dark Green Trust Signals */}
  <div className="bg-[#1A3C34] text-white py-2 px-8 hidden lg:flex justify-between items-center text-xs">
    <div className="flex gap-6">
      <span>📞 +255 123 456 789</span>
      <span>💬 WhatsApp Us</span>
    </div>
    <div className="flex gap-4">
      <a href="#" className="hover:text-emerald-300">Twitter</a>
      <a href="#" className="hover:text-emerald-300">Facebook</a>
      <a href="#" className="hover:text-emerald-300">Instagram</a>
      <span>🌙 Themes</span>
    </div>
  </div>

  {/* BOTTOM ROW: Main Navigation */}
  <div className="navbar bg-base-100 shadow-md px-4 lg:px-8">
    <div className="navbar-start">
      {/* Mobile Menu Toggle */}
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/">Home</a></li>
          <li>
            <a href="#">Our Tours</a>
            <ul className="p-2">
              <li><a href="/dar-tour">Dar-es-salaam tour</a></li>
              <li><a href="/zanzibar-tour">Zanzibar-tour</a></li>
            </ul>
          </li>
          <li><a href="/about">About</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>
      <a className="text-2xl font-bold text-amber-700 cursor-pointer" href="/">Kijeda-Tour</a>
    </div>

    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-semibold">
        <li><a href="/">Home</a></li>
        <li>
          <details>
            <summary>Our Tours</summary>
            <ul className="p-2 w-48 z-10 bg-base-100 shadow-lg">
              <li><a href="/dar-tour">Dar-es-salaam tour</a></li>
              <li><a href="/zanzibar-tour">Zanzibar-tour</a></li>
            </ul>
          </details>
        </li>
        <li><a href="/about">About</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
    </div>

    <div className="navbar-end gap-2">
      <input type="text" placeholder="Search safaris..." className="input input-bordered w-32 lg:w-48 h-10" />
      <button className="btn bg-amber-700 text-white hover:bg-amber-800">Inquire Now</button>
    </div>
  </div>
{/* Herous section */}
<div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden flex items-center justify-center">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Videos/Herous-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
          Discover the Magic of Tanzania
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-md">
          Kijeda Tour Your Swahili Safari Gateway
        </p>
      
      </div>
    </div>



</div>


     </>
  );
}