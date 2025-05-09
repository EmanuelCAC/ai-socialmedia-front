"use client"
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";
import { useEffect, useRef, useState } from "react";

export default function Signin() {
  const [selected, setSelected] = useState(0);
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  const data = [
    {name: "copie1", messages: [
      {role: "user", content: "Oi, tudo bem?"},
      {role: "assistant", content: "Oi, tudo bem? Como posso ajudar você hoje?"},
      {role: "user", content: "Qual é o seu nome?"},
      {role: "assistant", content: "Meu nome é Assistente. E o seu?"},
    ]},
    {name: "copie2", messages: [
      {role: "user", content: "Oi, tudo bem?"},
      {role: "assistant", content: "Oi, tudo bem? Como posso ajudar você hoje?"},
      {role: "user", content: "Qual é o seu nome?"},
      {role: "assistant", content: "Meu nome é Mateus. E o seu?"},
    ]},
    {name: "copie3", messages: [
      {role: "user", content: "Oi, tudo bem?"},
      {role: "assistant", content: "Oi, tudo bem? Como posso ajudar você hoje?"},
      {role: "user", content: "Qual é o seu nome?"},
      {role: "assistant", content: "Meu nome é Azul. E o seu?"},
    ]},
    {name: "copie4", messages: [
      {role: "user", content: "Oi, tudo bem?"},
      {role: "assistant", content: "Oi, tudo bem? Como posso ajudar você hoje?"},
      {role: "user", content: "Qual é o seu nome?"},
      {role: "assistant", content: "Meu nome é 'E o seu?'"},
    ]},
    {name: "copie5", messages: [
      {role: "user", content: "Oi, tudo bem?"},
      {role: "assistant", content: "Oi, tudo bem? Como posso ajudar você hoje?"},
      {role: "user", content: "Qual é o seu nome?"},
      {role: "assistant", content: "Meu nome é Goabits. E o seu?"},
    ]},
  ]

  return (
    <div className="bg-[#D2D15B] rounded-r-[40px] rounded-l-[50px] flex flex-row h-full">
      <div className="bg-[#918E27] border-2 border-[#293D02] shadow-[2px_0_10px_rgba(0,0,0,0.7)] rounded-[40px] flex-2/7 pt-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-4 px-6 bg-[#B7BB4C] w-full hover:bg-[#C8CE64] border-b-2 border-t-2 ${selected === index ? 'bg-[#C8CE64] border-[#293D02]' : 'border-[#B7BB4C]'}`}
            onClick={() => setSelected(index)}
          >
            <p className={`font-semibold text-lg cursor-pointer ${selected === index ? 'text-[#87210E]' : 'text-[#272323]'}`}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-[40px] flex-5/7 px-10 py-20 relative">
        {data[selected].messages.map((message, index) => (
          <div key={index} className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'} mb-2`}>
            <div className={`p-4 px-6 rounded-[20px]  ${message.role === 'user' ? 'bg-[#FFFFFF] rounded-br-none' : 'bg-[#918E27] rounded-bl-none'}`}>
              <p className={`text-sm text-[#000000]`}>
                {message.content}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute bottom-10 left-[50%] transform-[translate(-50%,0)] w-[80%] flex flex-row gap-3 items-center border-2 border-[#293D02] bg-[#C8CE64] rounded-[20px] p-2">
          <textarea
            placeholder="Digite sua mensagem"
            value={text}
            className="text-black focus-visible:outline-none text-wrap w-full resize-none min-h-[50px] max-h-[150px] custom-scroll"
            onChange={(e) => setText(e.target.value)}
            rows={1}
            ref={textareaRef}
          />
          <Image src={images.send} alt="copies" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}
