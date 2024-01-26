"use client"
import { FunctionComponent, useState } from "react";
import {LeftLogo, RightLogo} from '../Logo'
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Home from "@/app/page";


interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {

return (
      <div className=" flex flex-col items-center ">
        <div className=" font-bold text-[2rem] underline">Shorten Your Url</div>
        <div className=" mt-10 pt-10 bg-white flex flex-col items-center p-5 rounded-lg max-h-screen "> 
            <div className=" text-[1.5rem]"> Shortner that shortens and simplifies every url</div>
            <button className=" m-5 text-[1.4rem] hover:bg-orange-500 rounded-md bg-black text-white p-3 font-medium">Get Started</button>
        </div>
       </div> 
      );
}
 
export default Dashboard;