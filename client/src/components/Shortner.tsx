"use client"

import { BASE_URL } from "@/Secrets";
import { useEffect, useState } from "react";

 
const Shortner= () => {
    const [url, setUrl]= useState("");
    const [shortIds, setShortIds]= useState([])
    const [toggle, setToggle]= useState(false)

    useEffect(()=> {
        const fun= async ()=> {
            const res= await fetch(`${BASE_URL}/url/getAllUrls`, {
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            if(!res.ok){
                throw new Error("Network problem!")
            }
            const data= await res.json()  
           // console.log(data);
            
            setShortIds(data)
            setToggle(false)    
        }
        fun()
    })

    const handleSubmit = async(e:any)=> {
        e.preventDefault()
        try{
            const res= await fetch(`${BASE_URL}/url/`,{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({redirectUrl:url})
            });
            if(!res.ok){
                throw new Error("Network Problem!")
            }
            const data= await res.json()
            setToggle(true)
            setUrl("")
            
            
        }catch(err){
            console.log(err);
            
        }
    }
    
    return ( 
        <div>
        <form onSubmit={handleSubmit} className=" flex flex-col items-center gap-5">
            <input onChange={(e)=> setUrl(e.target.value)} required placeholder="Enter URL here" className=" w-[30vw] bg-white p-4 rounded-md outline-none" type="text" />
            <button type="submit" className=" p-3 px-7 w-[10vw] hover:bg-orange-500 rounded-lg bg-purple-800 text-white font-medium">Submit</button>
        </form>
        
        <div className="  mt-10 py-4 rounded-lg bg-pink-500 items-center  pr-3 flex flex-col gap-3 ">
        <div className=" flex justify-between w-[80%]">
            <div className=" text-[1.3rem] mx-1 font-semibold relative left-20 ">Shortened URL</div>
            <div className="text-[1.3rem] pl-7 font-semibold ">View Count</div>
        </div>
        
            {shortIds.map((val)=> (
                <div className=" flex gap-10">   
                    {/* @ts-ignore */}
                     <a className=" text-[1.2rem] font-semibold text-white" target="_blank" href={`${BASE_URL}/${val.shortId}`}>
                    {/* @ts-ignore */}
                        {`${BASE_URL}/${val.shortId}`}             
                    </a> 
                     {/* @ts-ignore */}
                    <div> {val.visitHistory.length} </div>
                </div>
            ))}
      
        </div>
        </div>
     );
}
 
export default Shortner;