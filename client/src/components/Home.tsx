"use client"
import { FunctionComponent, useState } from "react";
import {LeftLogo, RightLogo} from '../Logo'


interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {

    const [expand, setExpand]= useState(true)


    return (
        <div className=" flex  w-[100vw]  bg-yellow-300  fixed">
            <div className={`${expand ? 'w-[20vw]': 'w-fit'}  h-[100vh]  bg-pink-300 `}>
                <div className=" flex flex-col gap-4 items-end cursor-pointer ">
              {
                expand ? <div onClick={()=> setExpand(false)}> <LeftLogo /></div>: <div onClick={()=> setExpand(true)}> <RightLogo /> </div>
              }
              </div>
              <div className="">fdfd</div>
            </div>
            <div className=" flex w-[100vw] h-[100vh] flex-col">
            <div className=" max-h-screen  w-[100%] h-[7vh] bg-red-500">
                hghgh
            </div>
           
                <div className=" flex overflow-auto  gap-36 p-10 h-[100vh] flex-col ">
                    <div className=" z-20">tttttttttttt</div>
                    <div>gfgfg</div>
                    <div>gfgfg</div>
                    <div>gggggggggg</div>
                    <div>gggggggggg</div>
                    <div>gggggggggg</div>
                    <div>ggggggddddddddddddddddddddgggg</div>
                </div>
           
            
            </div>
        </div>
      );
}
 
export default Dashboard;