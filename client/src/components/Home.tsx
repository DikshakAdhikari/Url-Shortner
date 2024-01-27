"use client"
import { FunctionComponent, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {
  const router= useRouter()

  const handleClick= ()=> {
    if(Cookies.get('token')){
      router.push('/shortner')
    }else{
      router.push('/signin')
    }
  }

return (
      <div className=" flex flex-col items-center ">
        <div className=" font-bold text-[2.2rem] text-gray-900 underline">Shorten Your Url  ;) </div>
        <div className=" mt-10 shadow-lg pt-10 bg-white flex flex-col items-center p-5 rounded-lg max-h-screen "> 
            <div className=" text-[1.5rem]"> Shortner that shortens and simplifies every url</div>
            <button onClick={handleClick} className=" m-5 text-[1.1rem] hover:bg-orange-500 rounded-md bg-black text-white p-3 font-medium">Get Started</button>
        </div>
       </div> 
      );
}
 
export default Dashboard;