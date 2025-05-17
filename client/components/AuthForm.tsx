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
import Image from "next/image"

const AuthForm = () => {
  return (
<div className="h-[100vh] w-[100vw] bg-gradient-to-br from-orange-200 via-orange-50 to-orange-800">
        
        <div>
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
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input id="username" type="email"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confrim_password">Confirm password</Label>
              <Input id="confirm_password" type="password"  />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="hover:bg-neutral-200 bg-white text-black">Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card className="bg-black text-white">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
              <Input id="username" type="email"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password"  />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="hover:bg-neutral-200 bg-white text-black">Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
        </div>
    </div>
  )
}

export default AuthForm
