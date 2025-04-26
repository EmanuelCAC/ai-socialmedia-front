"use client"
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";

export default function Signin() {

  const { login, isLogged } = useAuthStore();

  console.log(isLogged)

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">My Copies</h1>
    </div>
  );
}
