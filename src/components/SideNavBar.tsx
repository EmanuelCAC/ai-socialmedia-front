'use client'

import React, { useState } from 'react'
import { redirect } from "next/navigation";
import { ArrowLeft, Bot, Gauge, LogOut, MessageSquareText, User } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import Image from "next/image";
import images from "@/constants/images";


const SideNavBar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { logout } = useAuthStore()

  return (
    <div className="w-full flex flex-row">
      <div className="min-h-screen bg-background max-w-80 w-full justify-between items-center flex flex-col py-20">
        <div className="flex flex-col items-center">
          <Image src={images.logo} alt='logo' height={150} />
          <div className='flex flex-col gap-5 mt-10 border-2 border-[#C8CE64] rounded-[20px] p-4 bg-[#272323]'>
            <Image src={images.copies} alt="copies" width={50} height={50} className='cursor-pointer p-2 rounded-lg hover:bg-foreground/10' onClick={() => redirect('/protected/copies')} />
            <Image src={images.ai} alt="copies" width={50} height={50} className='cursor-pointer p-2 rounded-lg hover:bg-foreground/10' onClick={() => redirect('/protected/ai')} />
          </div>
        </div>
        <div
          className="flex flex-row w-fit gap-5 mt-auto border-2 border-[#C8CE64] rounded-[20px] p-4 bg-[#272323] items-center justify-center">
          <Image src={images.config} alt="config" width={50} height={50} className='cursor-pointer p-2 rounded-lg hover:bg-foreground/10' onClick={() => redirect('/protected/copies')} />
          <p className="text-base font-semibold border-2 border-[#87210E] bg-[#EC3F1F] p-2 rounded-[16px] cursor-pointer" onClick={() => logout()}>LOG-OUT</p>
        </div>
      </div>
      <div className="flex flex-col gap-20 w-full transition-all duration-500 p-3 mt-36">
        {children}
      </div>
    </div>
  )
}

export default SideNavBar