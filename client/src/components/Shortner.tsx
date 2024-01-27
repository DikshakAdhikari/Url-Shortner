"use client"

import { BASE_URL } from "@/Secrets";
import { useEffect, useState } from "react";

 
const Shortner= () => {
    const [url, setUrl]= useState("");
    const [shortIds, setShortIds]= useState([])

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
            setShortIds(data)
            
        }
        fun()
    })

    const handleSubmit = (e:any)=> {
        e.preventDefault()
    }

    return ( 
        <div>
        <form onSubmit={handleSubmit} className=" flex flex-col items-center gap-5">
            <input onChange={(e)=> setUrl(e.target.value)} required placeholder="Enter URL here" className=" w-[30vw] bg-white p-3 rounded-md outline-none" type="text" />
            <button type="submit" className=" p-3 px-7 w-[10vw] hover:bg-orange-500 rounded-lg bg-purple-800 text-white font-medium">Submit</button>
        </form>
        <div>
            {shortIds.map((val)=> (
                <div>
                    {/* @ts-ignore */}
                    {val && <a target="_blank" href={`${BASE_URL}/${val.shortId}`}>
                    {/* @ts-ignore */}
                        {`${BASE_URL}/${val.shortId}`}
                    </a> }
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Shortner;