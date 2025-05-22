"use client"

import Image from "next/image";
import images from "@/constants/images";
import { useEffect, useRef, useState } from "react";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useAuthStore } from "@/stores/authStore";

export default function Ai() {
  const { saveContext, aiName, aiContext } = useAuthStore()

  const [name, setName] = useState(aiName || '');
  const [text, setText] = useState(aiContext || '');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleContext = async (formData: FormData) => {
    const name = formData.get("name")
    const description = formData.get("description")

    if (typeof name === "string" && typeof description === "string") {
      // const rawData = await fetch("", {
      //   method: 'POST',
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     description
      //   })
      // })

      // const data = await rawData.json()

      saveContext(name, description)
    }
  }

  const autoResize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto'; // reset height
      el.style.height = `${el.scrollHeight}px`; // set to scrollHeight
    }
  }

  useEffect(() => {
    autoResize(); // run on initial render
  }, [text]);

  return (
    <div className="bg-[#FFE4D0] rounded-r-[40px] rounded-l-[50px] flex flex-row h-full">
      <div className="bg-[#F64939] border-2 border-[#87210E] shadow-[2px_0_10px_rgba(0,0,0,0.7)] rounded-[40px] flex-2/7 flex flex-col pt-10 items-center gap-5">
        <div className="bg-[#87210E] aspect-square rounded-[20px] max-w-[280px] max-h-[280px] p-[15px]">
          <div className="bg-white max-w-full max-h-full border-[#87210E] aspect-square rounded-[15px] flex flex-col justify-center items-center">
            <Image src={images.goiabits} alt="Goiabits" className="aspect-square h-[70%] w-[70%]" />
            <p className="text-[#87210E] font-bold text-xl">{aiName || ''}</p>
          </div>
        </div>
        <div className="bg-[#FD6E4E] border border-[#87210E] flex flex-col text-black w-[80%] text-sm px-3 py-1 rounded-[15px] gap-3">
          <div className="w-full flex flex-row">
            <p className="flex-1 text-nowrap">Criado em:</p>
            <p className="flex-1 text-nowrap">12/05/2025</p>
          </div>
          <div className="w-full flex flex-row">
            <p className="flex-1 text-nowrap">N° de Copies:</p>
            <p className="flex-1 text-nowrap">14</p>
          </div>
        </div>
        <Image src={images.controlls} alt="controlls" className="max-w-[200px] my-auto" />
      </div>
      <div className="rounded-[40px] flex-5/7 flex flex-col p-10 ">
        <form className="flex-1 flex flex-col gap-2">
          <Label htmlFor="name" className="font-semibold text-[#87210E]">NAME</Label>
          <Input
            name="name"
            className="bg-[#FCC195] border-2 border-[#EC3F1F] text-black flex h-10 w-full rounded-xl border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder=""
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="description" className="font-semibold text-[#87210E] pt-3">DESCRIÇÃO</Label>
          <div className="bg-[#FCC195] border-2 border-[#EC3F1F] flex w-full rounded-xl px-3">
            <textarea
              placeholder=""
              value={text}
              className="text-black w-full focus-visible:outline-none text-wrap resize-none min-h-[100px] max-h-[300px] custom-scroll-red text-sm"
              onChange={(e) => setText(e.target.value)}
              rows={1}
              ref={textareaRef}
              name="description"
            />
          </div>
          <div className="flex flex-row justify-end mt-auto gap-5 pr-10">
            <button
              className="bg-[#B7BB4C] border border-[#293D02] px-5 py-2 text-white rounded-2xl flex gap-2"
              formAction={handleContext}
            >
              SALVAR <Image src={images.edit} alt="edit" className="h-[20px] w-[20px] aspect-square" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
