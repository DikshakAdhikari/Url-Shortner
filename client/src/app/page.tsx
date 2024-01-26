"use client"
import { FunctionComponent, useState } from "react";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import Dashboard from "../components/Home";


export default function Home() {
  return (
    <div className=" flex  w-[100vw] bg-slate-200 fixed">
    <SideBar />
     <div className=" flex w-[100vw] h-[100vh] flex-col">
         <Navbar />
         <div className=" flex overflow-auto  gap-36 p-10 h-[100vh] flex-col ">
             <Dashboard />
         </div>
     </div>
 </div>
  );
}


