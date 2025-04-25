'use client'

import React, { useState } from 'react'
import { redirect } from "next/navigation";
import { ArrowLeft, Bot, Gauge, LogOut, MessageSquareText, User } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';


const SideNavBar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [colaps, setColaps] = useState(false)
  const { logout } = useAuthStore()

  return (
    <div className="w-full flex flex-row gap-12">
      <div className={`border-r border-r-foreground/10 min-h-[calc(100vh-64px)] fixed left-0 top-16 bg-background z-50 transition-all duration-500 ${colaps ? 'w-[68px]' : 'w-60'}`}>
        <button 
          className={`absolute top-10 -right-2.5 cursor-pointer p-0.5 bg-background hover:bg-primary text-foreground/80 hover:text-white border rounded-full transition-transform duration-600 ${colaps ? 'rotate-180' : ''}`} 
          onClick={() => setColaps(!colaps)}
        >
          <ArrowLeft size={'15px'} strokeWidth={'3px'} />
        </button>
        <div className="flex flex-col mt-36">
          <div
            className="flex flex-row hover:bg-foreground/5 py-2 pl-5 hover:text-primary cursor-pointer gap-5 items-center"
            onClick={() => redirect('/')}
            >
            <Gauge size={28} strokeWidth={2} className='min-w-7' />
            <p className="text-lg font-semibold overflow-hidden">Dashboard</p>
          </div>
          <div
            className="flex flex-row hover:bg-foreground/5 py-2 pl-5 hover:text-primary cursor-pointer gap-5"
            onClick={() => redirect('/')}
            >
            <MessageSquareText size={28} strokeWidth={2} className='min-w-7' />
            <p className="text-lg font-semibold overflow-hidden">Conversas</p>
          </div>
          <div
            className="flex flex-row hover:bg-foreground/5 py-2 pl-5 hover:text-primary cursor-pointer gap-5"
            onClick={() => redirect('/')}
            >
            <User size={28} strokeWidth={2} className='min-w-7' />
            <p className="text-lg font-semibold overflow-hidden">Leads</p>
          </div>
          <div
            className="flex flex-row hover:bg-foreground/5 py-2 pl-5 hover:text-primary cursor-pointer gap-5"
            onClick={() => redirect('/')}
            >
            <Bot size={28} strokeWidth={2} className='min-w-7' />
            <p className="text-lg font-semibold overflow-hidden">AI</p>
          </div>
        </div>
        <div
            className="flex flex-row w-full  hover:bg-foreground/5 py-2 pl-5 hover:text-primary cursor-pointer gap-5 absolute bottom-5"
            onClick={() => logout()}
            >
            <LogOut size={28} strokeWidth={2} className='min-w-7' />
            <p className="text-lg font-semibold overflow-hidden">Logout</p>
          </div>
      </div>
      <div className={`flex flex-col gap-20 w-full transition-all duration-500 ${colaps ? 'ml-[68px]' : 'ml-60'} p-3 mt-36`}>
        {children}
      </div>
    </div>
  )
}

export default SideNavBar