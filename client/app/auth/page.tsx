"use client"
import AuthForm from '@/components/AuthForm'
import { useAppContext } from '@/contexts/AppContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const AuthPage = () => {
  const router = useRouter();
  const { user } = useAppContext();
  useEffect(()=>{
    if(user) router.replace('/home')
  },[router])
  return (
    <div>
      <AuthForm/>
    </div>
  )
}

export default AuthPage
