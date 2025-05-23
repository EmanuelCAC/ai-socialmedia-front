"use client"
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Signin() {

  const [error, setError] = useState('')
  const { login } = useAuthStore();

  const handleSignIn = async (formData: FormData) => {
    const email = formData.get("email")
    const password = formData.get("password")

    if (typeof email === "string" && typeof password === "string") {
      const rawData = await fetch("http://localhost:3000/auth/login", {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
  
      const data = await rawData.json()
      if (data.message === "User logged in successfully")
        login(email, data.token)
      else
        setError(data.message)
    }
  }


  return (
    <form className="flex-1 flex flex-col w-full gap-3 px-4 justify-center items-center">
      <Image src={images.logo} height={200} alt="logo"/>
      <p className="text-sm text-gray-300 mb-4 text-center">
        Criatividade automatizada. <br/>
        Resultados reais.
      </p>
      <div className="flex flex-col w-full gap-1 [&>input]:mb-3">
        <div className="flex flex-col border-2 border-[#B6BC42] rounded-[20px] p-4 px-8 bg-[#272323] gap-2 [&>input]:mb-2">
          <Label htmlFor="email" className="font-semibold pt-2">EMAIL</Label>
          <Input name="email" type="text" placeholder="" required />
          <Label htmlFor="password" className="font-semibold">SENHA</Label>
          <Input
            type="password"
            name="password"
            placeholder=""
            required
          />
        </div>
        <p className="text-red-600 text-base font-light pl-1">{error ? "| " + error : ""}</p>
        <div className="flex-1 flex flex-row gap-3 justify-between items-center w-full px-1 pt-4">
          <Link href={"/sign-up"} className="flex-1/2 text-md font-semibold text-[#EC3F1F] underline">
            NÃO POSSUO CADASTRO
          </Link>
          <button
            type="submit"
            className="flex-1/2 bg-[#A29D37] px-5 py-2 text-white rounded-2xl"
            formAction={handleSignIn} 
          >
            ENTRAR
          </button>
        </div>
      </div>
    </form>
  );
}
