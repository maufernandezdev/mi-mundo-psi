"use client";
import { useParams } from "next/navigation";
import {
  ComoEmpezarTerapia,
  LaDesmotivacionLaboral,
  ComoMantenerConversacionesDificiles,
  LenguajesDelAmor,
  EnBuscaDelEquilibro,
} from "@/sections/blog/list";

export default function BlogDetail() {
  const params = useParams();
  const id = params?.id;
  return (
    <main className="">
      <div className="max-w-[1024px] m-auto pt-10 pb-20">
      {id === "1" ? <ComoMantenerConversacionesDificiles /> : null}
      {id === "2" ? <ComoEmpezarTerapia /> : null}
      {id === "3" ? <LaDesmotivacionLaboral /> : null}
      {id === "4" ? <LenguajesDelAmor /> : null}
      {id === "5" ? <EnBuscaDelEquilibro /> : null}
      </div>
    </main>
  );
}
