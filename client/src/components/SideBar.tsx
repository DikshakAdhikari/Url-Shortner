import { LeftLogo, RightLogo } from "@/Logo";
import { FunctionComponent, useState } from "react";

interface SideBarProps {
    
}
 
const SideBar: FunctionComponent<SideBarProps> = () => {
    const [expand, setExpand]= useState(true)
    return ( 
        <div className={`${expand ? 'w-[15vw]': 'w-fit'}  h-[100vh] border-r-[1px] bg-white border-gray-300 `}>
        <div className=" flex flex-col gap-4 items-end cursor-pointer ">
      {
        expand ? <div onClick={()=> setExpand(false)}> <LeftLogo /></div>: <div onClick={()=> setExpand(true)}> <RightLogo /> </div>
      }
      </div>
      <div className="">fdfd</div>
    </div>
     );
}
 
export default SideBar;