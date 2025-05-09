'use client'

import React, { useState } from 'react'
import { redirect } from "next/navigation";
import { ArrowLeft, Bot, Gauge, LogOut, MessageSquareText, User } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import Image from "next/image";
import images from "@/constants/images";


const SideNavBar = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { logout } = useAuthStore()
  const [active, setActive] = useState('copies')

  return (
    <div className="w-full flex flex-row">
      <div className="min-h-[calc(100vh-240px)] bg-background max-w-fit w-full justify-between items-center flex flex-col pr-30">
        <div className="flex flex-col items-center">
          <Image src={images.logo} alt='logo' height={150} />
          <div className='flex flex-col gap-5 mt-10 border-2 border-[#C8CE64] rounded-[20px] p-4 bg-[#272323]'>
            {active === 'copies' ? (
              <>
                <Image src={images.copiesActive} alt="copies" width={50} height={50} className='cursor-pointer p-2 rounded-lg hover:bg-foreground/10' onClick={() => redirect('/protected/copies')} />
                <Image src={images.ai} alt="copies" width={50} height={50} className='cursor-pointer p-2 rounded-lg hover:bg-foreground/10' onClick={() => {
                  setActive('ai')
                  redirect('/protected/ai')
                }} />
              </>
            ) : (
              <>
                <Image src={images.copies} alt="copies" width={50} height={50} className='cursor-pointer p-2 rounded-lg hover:bg-foreground/10' onClick={() => {
                  setActive('copies')
                  redirect('/protected/copies')
                }} />
                <Image src={images.aiActive} alt="copies" width={50} height={50} className='cursor-pointer p-2 rounded-lg hover:bg-foreground/10' onClick={() => redirect('/protected/ai')} />
              </>
            )}
          </div>
        </div>
        <div
          className="flex flex-row w-fit gap-5 mt-auto border-2 border-[#C8CE64] rounded-[20px] p-4 bg-[#272323] items-center justify-center">
          <Image src={images.config} alt="config" width={50} height={50} className='cursor-pointer p-2 rounded-lg hover:bg-foreground/10' onClick={() => redirect('/protected/copies')} />
          <p className="text-base font-semibold border-2 border-[#87210E] bg-[#EC3F1F] p-2 rounded-[16px] cursor-pointer" onClick={() => logout()}>LOG-OUT</p>
        </div>
      </div>
      <div className="min-h-[calc(100vh-240px)] w-full transition-all duration-500">
        {children}
      </div>
    </div>
  )
}

export default SideNavBar