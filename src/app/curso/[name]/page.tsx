"use client";
import { useParams } from "next/navigation";
import { ConstruccionVocacional } from "@/sections/workshops/ConstruccionVocacional";

export default function CourseDetail (){
  const params = useParams();
  const id = params?.id;
  return (
    <section>
      <div className="bg-blue-grey pt-10">
        <h1 className="text-[32px] uppercase text-pink text-center font-baby-doll">descripción del taller</h1>
      </div>
      <ConstruccionVocacional />
    </section>
  )
}