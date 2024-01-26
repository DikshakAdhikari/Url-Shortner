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
        <input className=" my-5 p-3 border-2 outline-none border-gray-300" type="text" />
       </div> 
      );
}
 
export default Dashboard;