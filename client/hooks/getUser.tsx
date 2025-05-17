import { useAppContext } from "@/contexts/AppContext";
import { useState } from "react"
import { toast } from "sonner";

export const getUser = async()=>{
    const { setUser, user, backendUrl } = useAppContext()
    const [loading, setLoading] = useState<boolean>(true);
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

    return { loading, user}
}