"use client"
import { BASE_URL } from '@/Secrets';
import { useRouter } from 'next/navigation';
// SignupForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const router= useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     try{
        const res= await fetch(`${BASE_URL}/user/signin/`, {
            method:"POST",
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        });
        if(!res.ok){
            throw new Error("Network error!")
        }
        const data= await res.json();
        console.log(data);
        
        localStorage.setItem('token', data)
        
        router.push('/shortner')
        
     }catch(err){
        console.log(err);
        
     }
  };

  //console.log(formData);
  
  return (
    <div className=" max-w-2xl items-center mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
      <form onSubmit={handleSubmit}>
 
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
