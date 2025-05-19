import { useAppContext } from '@/contexts/AppContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const useAuth = () => {
    const { backendUrl, setUser } = useAppContext()
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    const login = async (email: string, password: string) => {
        setLoading(true)
        try {
            const response = await fetch(backendUrl + '/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });
            const { data, message, success } = await response.json();
            console.log(message);
            setUser(data);
            toast(message);
            if (success) router.push('/home');
        } catch (error) {
            console.log(error);
            toast((error as Error)?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }

    }

    const register = async (name:string, email:string, password:string, confirmPass:string)=>{
        setLoading(true)
        try {
            if(password !== confirmPass){
          return toast("Password doesn't match");
        }
        const response = await fetch(backendUrl + '/api/auth/register',{
          method:"POST",
          headers: {'Content-Type':"application/json"},
          credentials: 'include',
          body: JSON.stringify({name, email, password})
        });
        const { data, message, success } = await response.json();
        console.log(message);
        // setUser(data);
        toast(message);
        // if (success) router.push('/home');
        } catch (error) {
            console.log(error);
            toast((error as Error)?.message || "Something went wrong.");
        }finally{
            setLoading(false);
        }
    }

    const logout = async ()=>{
        setLoading(true);
        try {
           const response = await fetch(backendUrl+ '/api/auth/logout',{
                method: "POST",
                credentials: "include",
                headers: {"Content-Type" : "application/json"}
            });
            const { message } = await response.json();
            console.log(message);
            toast(message);
            setUser(null)
            router.refresh();
        } catch (error) {
            console.log(error);
            toast((error as Error)?.message || "Something went wrong.");
        }finally{
            setLoading(false);
        }
    }


    return {login, loading, register, logout}
}

export default useAuth
