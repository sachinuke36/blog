import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbLogs } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import Layout from "@/components/Layout";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen bg-[#0F0F0F] overflow-hidden p-2">
      {/* Sidebar */}
      <Layout />

      {/* Main content */}
      <main className="flex-1 rounded-2xl overflow-y-auto p-2  bg-[#1b1b1b] text-white shadow-sm shadow-amber-600">
        {children}
      </main>
    </div>
  );
}




// export default function MainLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="flex-1 flex bg-[#0F0F0F] box-border px-2 ">
//         <Layout/>

//         <Card className='w-9/8 my-2 mx- h-[calc(100vh-16px)] p-2 text-white border-none bg-[#1b1b1b5c]  shadow-sm shadow-amber-600'>
      
//             {children}
       
//         </Card>
//     </div>
//   );
// }