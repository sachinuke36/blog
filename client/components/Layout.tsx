'use client';

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbLogs } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import { useUser } from "@/hooks/getUser";
import { CiLogout } from "react-icons/ci";
import { useAppContext } from "@/contexts/AppContext";
import useAuth from "@/hooks/useAuth";


const Layout = () => {
  const pathname = usePathname();
  const router = useRouter();
  const {logout} = useAuth()
  const {  backendUrl, user,  loading} = useAppContext();
  const icon = !user ? <CiLogin size={20} /> : <CiLogout size={20} />

  const onclickHandler = (href: string)=>{
    switch(href){
      case "home" : return router.push('/home');
      case "dashboard" : return router.push('/dashboard');
      case "create-blog" : return router.push('/create-blog');
      case "auth" : if(user) return logout();
                    else return router.push('/auth')
    }
  }


  const navLink = (href: string, icon: any, label: string) => {
    const isActive = pathname === `/${href}`;
    return (
      <button
        onClick={() => onclickHandler(href)}
        className={`flex gap-2 items-center justify-start p-2 rounded-md w-full transition 
        ${isActive ? 'bg-orange-500 text-black' : 'text-white hover:bg-orange-200 hover:text-black'}`}
      >
        {icon}
        <span className="text-sm">{label}</span>
      </button>
    );
  };

  return (
    <div className="w-[250px] hidden sm:block box-border h-screen px-2">
      <Card className="flex border-none flex-col box-border h-[calc(100vh-16px)] bg-[#1C1C1C] flex-1">
        <div>
          <h3 className="mx-4 font-bold text-3xl text-white">Blog <span className="text-indigo-500">Hub</span></h3>
        </div>
        <div className="h-[100px]"></div>
        <div className="flex gap-3 flex-col items-start mx-2 justify-evenly">
          {navLink("home", <FaHome size={20} />, "Home")}
          {navLink("dashboard", <MdDashboard size={20} />, "Dashboard")}
          {navLink("create-blog", <IoMdAddCircleOutline size={20} />, "Create blog")}
          {/* {navLink("all-blogs", <TbLogs size={20} />, "All blogs")} */}
        </div>
        <div className="flex gap-2 mx-2 mt-70">
          {navLink("auth", icon , (function(){
            console.log(user)
            if(user) return "Logout";
            return "Login"
          })())}
        </div>
        <div className="  mx-4 px-2 font-bold text-xl text-indigo-400">{user?.name}</div>
      </Card>
    </div>
  );
};

export default Layout;
