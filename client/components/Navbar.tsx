"use client"
import { useAppContext } from '@/contexts/AppContext';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import useAuth from '@/hooks/useAuth';

const Navbar = () => {
    const { user } = useAppContext();
    const { logout } = useAuth();
  return (
    <nav className="w-full sticky top-0 z-10 p-2 sm:hidden">
        <h6 className='text-center my-2 font-bold text-2xl'>Blog <span className="text-indigo-500">Hub</span></h6>
      <ul className="text-white flex justify-between px-2 mb-2 text-sm sm:font-bold bg-amber-600 rounded-2xl p-2 shadow-sm shadow-amber-400">
        <li><Link href={'/home'}> Home</Link> </li>
        <li><Link href={'/dashboard'}> Dashboard</Link> </li>
        <li><Link href={'/create-blog'}>Create Blog</Link></li>
        {
            user ? <li onClick={logout} className='text-amber-200'>Logout</li> : <li><Link href={'/auth'}>login</Link></li>
        }
        
      </ul>
    </nav>
  )
}

export default Navbar
