
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Link from "next/link";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen bg-[#0F0F0F] overflow-hidden p-2">
  <Layout />

  <div className="flex-1 flex flex-col overflow-hidden rounded-2xl bg-[#1b1b1b] text-white shadow-sm shadow-amber-600">
    
    <Navbar/>

    <main className="flex-1 overflow-y-auto p-2">
      {children}
    </main>
    
  </div>
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