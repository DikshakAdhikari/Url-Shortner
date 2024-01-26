import { LeftLogo, LogoutLogo, RegisterLogo, RightLogo } from "@/Logo";
import { FunctionComponent, useState } from "react";

interface SideBarProps {
    
}
 
const SideBar: FunctionComponent<SideBarProps> = () => {
    const [expand, setExpand]= useState(true)
    return ( 
        <div className={`${expand ? 'w-[15vw]': 'w-fit'}  h-[100vh] border-r-[1px] border-white  bg-black`}>
        <div className=" flex m-2 flex-col gap-4 items-end cursor-pointer ">
      {
        expand ? <div onClick={()=> setExpand(false)}> <LeftLogo /></div>: <div onClick={()=> setExpand(true)}> <RightLogo /> </div>
      }
      </div>
      <div className=" flex p-3 mt-4  gap-3">
            <div className=" flex flex-col justify-center  gap-8 ">
                <div className=" cursor-pointer"><RegisterLogo  /></div>
                <div className=" cursor-pointer"><LogoutLogo /></div>
            </div>
            <div className=" flex flex-col justify-center gap-8 ">
                <div className={` ${!expand && "hidden"} text-white text-[1.2rem] cursor-pointer font-medium`}>Signup</div>
                <div className={` ${!expand && "hidden"} text-white text-[1.2rem] cursor-pointer font-medium`}>Signin</div>
            </div>
      </div>
    </div>
     );
}
 
export default SideBar;