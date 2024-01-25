import { FunctionComponent } from "react";

interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {
    return (
        <div className=" flex  w-[100vw]  bg-yellow-300  fixed">
            <div className="  h-[100vh] w-[20vw] bg-pink-300 ">
              <div className=" ">
                    hggf
              </div>
            </div>
            <div className=" flex w-[100vw] flex-col">
            <div className=" max-h-screen  w-[100%] h-[7vh] bg-red-500">
                hghgh
            </div>
            <div className=" relative">
                <div className=" flex overflow-scroll p-3 h-[100vh] flex-col gap-96">
                    <div>gfgfg</div>
                    <div>gfgfg</div>
                    <div>gfgfg</div>
                    <div>gfgfg</div>
                </div>
            </div>
            
            </div>
        </div>
      );
}
 
export default Dashboard;