"use client"

import Image from "next/image";
import images from "@/constants/images";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "@/stores/authStore";

type Message = {
  role: string,
  content: string
}

export default function Copies() {

  const { token } = useAuthStore()

  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [data, setData] = useState<Message[]>([])

  const chatRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    setData([...data, { role: 'user',  content: text }])

    const rawData = await fetch("http://localhost:3000/ai/prompt", {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        prompt: text
      })
    })

    setText('')
    const message = await rawData.json()
    

    setData(prevData => [...prevData, { role: 'ai',  content: message.text }])
  }

  const autoResize = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto'; // reset height
      el.style.height = `${el.scrollHeight}px`; // set to scrollHeight
    }
  }
  
  const chatScrollInit = () => {
    const el = chatRef.current;
    if(el) {
      el.scrollTo(0, el.offsetHeight)
    }
  }

  useEffect(() => {
    chatScrollInit();
  }, []);

  useEffect(() => {
    autoResize(); // run on initial render
  }, [text]);

  return (
    <div className="bg-[#D2D15B] rounded-r-[50px] rounded-l-[50px] flex flex-row h-full relative">
      {/* <div className="bg-[#918E27] border-2 border-[#293D02] shadow-[2px_0_10px_rgba(0,0,0,0.7)] rounded-[40px] flex-2/7 pt-10 z-30">
        <button className="bg-[#EC3F1F] border border-[#87210E] p-2 text-white rounded-2xl flex gap-2 ml-auto mr-5 mb-10">
          + NOVA COPY
        </button>
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
      </div> */}
      <div className="rounded-[40px] flex-5/7 flex flex-col pt-10 max-h-[calc(100vh-240px)]">
        <div className="flex-1 max-h-full overflow-y-auto custom-scroll px-10" ref={chatRef}>
          {data && data.map((message, index) => (
          <div key={index} className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'} mb-2`}>
            <div className={`p-4 px-6 rounded-[20px] max-w-[60%] ${message.role === 'user' ? 'bg-[#FFFFFF] rounded-br-none' : 'bg-[#918E27] rounded-bl-none'}`}>
              <p className={`text-sm text-[#000000]`}>
                {message.content}
              </p>
            </div>
          </div>
        ))}
        </div>
          <div className="w-full flex pt-4 pb-8 items-center justify-center rounded-b-[50px] bg-[#B6BC42] z-20">
            <div className="w-[80%] flex flex-row gap-3 items-center border-2 border-[#293D02] bg-[#C8CE64] rounded-[20px] p-2">
            <textarea
              placeholder="Digite sua mensagem"
              value={text}
              className="text-black focus-visible:outline-none text-wrap w-full resize-none min-h-[50px] max-h-[150px] custom-scroll"
              onChange={(e) => setText(e.target.value)}
              rows={1}
              ref={textareaRef}
            />
            <Image onClick={sendMessage} src={images.send} alt="copies" width={40} height={40} className="cursor-pointer active:opacity-60" />
          </div>
        </div>
      </div>
      <div className="w-[90%] h-11 absolute bottom-0 right-0 bg-[#B6BC42] rounded-b-[50px] z-10">

      </div>
    </div>
  );
}
