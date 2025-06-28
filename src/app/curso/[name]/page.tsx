"use client";
import { useParams } from "next/navigation";
import { ConstruccionVocacional } from "@/sections/workshops/ConstruccionVocacional";

export default function CourseDetail (){
  const params = useParams();
  const id = params?.id;
  return (
    <section>
      <div className="bg-primary-blue pt-10">
        <h1 className="text-[32px] font-bold uppercase text-pink text-center">descripción del taller</h1>
      </div>
      <ConstruccionVocacional />
    </section>
  )
}