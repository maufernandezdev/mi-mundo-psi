"use client";
import { useParams } from "next/navigation";
import {
  ComoEmpezarTerapia,
  LaDesmotivacionLaboral,
  ComoMantenerConversacionesDificiles,
  LenguajesDelAmor,
  EnBuscaDelEquilibro,
} from "@/sections/blog/list";
import { useRouter } from "next/navigation";
import blogList from "../../../sections/blog/blog.json";
import { useEffect } from "react";

export default function BlogDetail() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const handleNextBlog = () => {
    const nextBlog = blogList.find((blog) => blog.id === Number(id) + 1);
    if(!nextBlog) return
    router.replace(`/blog/${Number(id) + 1}`)
  }
  const handlePreviousBlog = () => {
    const previousBlog = blogList.find((blog) => blog.id === Number(id) - 1);
    if(!previousBlog) return
    router.replace(`/blog/${Number(id) - 1}`)
  }  

  return (
    <main>
      <div className="max-w-[1024px] m-auto pt-10 pb-20">
      {id === "1" ? <ComoMantenerConversacionesDificiles /> : null}
      {id === "2" ? <ComoEmpezarTerapia /> : null}
      {id === "3" ? <LaDesmotivacionLaboral /> : null}
      {id === "4" ? <LenguajesDelAmor /> : null}
      {id === "5" ? <EnBuscaDelEquilibro /> : null}
      </div>
      <div className="flex justify-center gap-4 mb-20 font-baby-doll text-[20px]"> 
        <button onClick={handlePreviousBlog}>{'< Anterior'}</button>
        <button onClick={handleNextBlog}>{'Siguiente >'}</button>
      </div>
    </main>
  );
}
