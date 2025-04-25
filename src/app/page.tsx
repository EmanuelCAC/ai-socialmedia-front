"use client"
import { useAuthStore } from "@/stores/authStore";
import Image from "next/image";
import images from "@/constants/images"
import Link from "next/link";


export default function Home() {

  const { login } = useAuthStore();

  return (
    <>
      <main className="flex-1 flex flex-col gap-3 px-4 justify-center items-center">
        <Image src={images.logo} height={200} alt="logo"/>
        <p className="text-sm text-gray-300 mb-4 text-center">
          Criatividade automatizada. <br/>
          Resultados reais.
        </p>
        <Link href="/sign-in" className="bg-[#A29D37] px-5 py-2 text-white rounded-2xl transition-colors duration-200">
          ENTRAR
        </Link>
        <Link href="/sign-up" className="bg-[#EC3F1F] px-5 py-2 text-white rounded-2xl transition-colors duration-200">
          CRIAR CONTA
        </Link>
      </main>
    </>
  );
}
