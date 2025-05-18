"use client"
import { tree } from "next/dist/build/templates/app-page";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const Context = createContext<any>(null);
export const useAppContext = ()=> useContext(Context);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const backendUrl = 'http://localhost:8000';
    const [user, setUser] = useState<any>(null);
    const [allBlogs, setAllBlogs] = useState<any>(null);
    const [allMyBlogs, setAllMyBlogs] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selected, setSelected] = useState<any>(null);


const getUser = useCallback(async()=>{
    try {
        const response = await fetch(backendUrl + '/api/auth/getuser',{
            method:"GET",
            credentials:'include',
            headers: {"Content-Type":"application/json"}
        });
        const { data, success } = await response.json();
        console.log(data);
        if(success) setUser(data);
    } catch (error) {
        console.log(error);
        toast.error((error as Error)?.message || "Something went wrong.");
    }finally{
        setLoading(false);
    }

},[]);

const getAllBlogs = useCallback(async()=>{
        try {
            const response = await fetch(backendUrl + '/api/blogs',{credentials:'include', headers: {"Content-Type":"application/json"}});
            const { data, message } = await response.json();
            console.log(message);
            console.log(data);
            setAllBlogs(data);
        } catch (error: any) {
            console.log(error);
            toast(error?.message)
        }
    },[]);

const getAllMyBlogs = useCallback(async()=>{
        try {
            const response = await fetch(backendUrl + '/api/blogs/my',{credentials:'include', headers: {"Content-Type":"application/json"}});
            const { data, message } = await response.json();
            console.log("all my blogs: ",message);
            console.log("all my blogs: ",data);
            setAllMyBlogs(data);
        } catch (error: any) {
            console.log(error);
            toast(error?.message)
        }
    },[]);

    useEffect(()=>{
        getUser();
        getAllMyBlogs(),
        getAllBlogs();
    },[getUser, getAllBlogs, getAllMyBlogs]);

  return (
	<Context.Provider value={{backendUrl,
     user, setUser, 
     loading, allBlogs, setAllBlogs,
     setAllMyBlogs, allMyBlogs,
     selected, setSelected
     }}>
	  {children}
	</Context.Provider>
  );
};

export default AppContextProvider;