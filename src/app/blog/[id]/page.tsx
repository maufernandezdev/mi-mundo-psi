"use client";
import { useParams } from "next/navigation";
import blogList from "@/sections/blog/blog.json";
import { ComoEmpezarTerapia } from "@/sections/blog/list/ComoEmpezarTerapia";
import { LaDesmotivacionLaboral } from "@/sections/blog/list/LaDesmotivacionLaboral";

export default function BlogDetail() {
  const params = useParams();
  const id = params?.id;
  return <main>
    <LaDesmotivacionLaboral />
  </main>;
}
