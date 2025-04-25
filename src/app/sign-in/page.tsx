"use client"
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";

export default function Signin() {

  const { login } = useAuthStore();

  return (
    <>
      <form className="flex-1 flex flex-col gap-3 px-4 justify-center items-center">
        <Image src={images.logo} height={200} alt="logo"/>
        <p className="text-sm text-gray-300 mb-4 text-center">
          Criatividade automatizada. <br/>
          Resultados reais.
        </p>
        <div className="flex flex-col border border-[#B6BC42] rounded-2xl p-5 bg-[#272323] gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email" className="font-semibold">EMAIL</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex justify-between items-center">
            <Label htmlFor="password" className="font-semibold">SENHA</Label>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <button
            type="submit"
            className="w-full h-10 bg-pink-700 text-white rounded-md hover:bg-pink-800 transition-colors duration-200"
            onClick={() => login('teste@gmail.com')} 
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
