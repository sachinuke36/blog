"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import useAuth from "@/hooks/useAuth"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

const AuthForm = () => {
  const { login, loading, register} = useAuth();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [action, setAction] = useState<"login" | "register">('login');

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault();
      if(action === 'login'){
        await login(email, password)
      }else{
       await register(name, email, password, confirmPass)
      }
  }


  return (
<div className="h-[100vh] w-[100vw] bg-gradient-to-br from-orange-200 via-orange-50 to-orange-800">
        <form onSubmit={handleSubmit}>
            <Tabs defaultValue="account" className="w-[400px] mx-auto pt-[10vh] ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger className='' value="account">Register</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
           
          </CardHeader>
          <CardContent className="space-y-4">
            {/* <form className="space-y-4" onSubmit={handleSubmit}> */}
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} type="text"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input id="username" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confrim_password">Confirm password</Label>
              <Input id="confirm_password" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)} type="password"  />
            </div>
            {/* </form> */}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading} onClick={()=>setAction('register')} className="hover:bg-neutral-200 bg-white text-black">{loading ? <div className="flex gap-2 items-center justify-center">
                    <Loader2 className="animate-spin" /> 
                    <div>please wait..</div>
            </div> : <div>Register</div>}</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* <form className="space-y-4" onSubmit={handleSubmit}> */}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  />
            </div>
            {/* </form> */}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading} onClick={()=>setAction('login')} className="hover:bg-neutral-200 bg-white text-black">{loading ? <div className="flex gap-2 items-center justify-center">
                    <Loader2 className="animate-spin" /> 
                    <div>please wait..</div>
            </div> : <div>Login</div>}</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
        </form>
    </div>
  )
}

export default AuthForm
