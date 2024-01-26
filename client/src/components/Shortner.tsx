"use client"
import { FunctionComponent, useState } from "react";

interface ShortnerProps {
    
}
 
const Shortner: FunctionComponent<ShortnerProps> = () => {
    const [url, setUrl]= useState("");

    const handleSubmit = ()=> {

    }

    return ( 
        <form onSubmit={handleSubmit} className=" flex flex-col items-center gap-5">
            <input onChange={(e)=> setUrl(e.target.value)} required placeholder="Enter URL here" className=" w-[30vw] bg-white p-3 rounded-md outline-none" type="text" />
            <button type="submit" className=" p-3 px-7 w-[10vw] hover:bg-orange-500 rounded-lg bg-purple-800 text-white font-medium">Submit</button>
        </form>
     );
}
 
export default Shortner;