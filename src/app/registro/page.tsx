"use client";
import logoColor from "@/assets/images/logo-color.png";
import Image from "next/image";
import { FormEvent } from "react";

export default function Registro() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className="bg-pink h-[92vh] overflow-y-hidden flex items-center flex-wrap justify-center flex-col">
      <h2 className="text-center font-baby-doll text-[24px] text-primary-blue uppercase leading-6">
        Te invitamos a ser parte <br /> de nuestra comunidad
      </h2>
      <div className="flex w-full justify-center mt-2">
        <Image src={logoColor} width={40} height={30} alt="logo"></Image>
      </div>
      <form
        onSubmit={onSubmit}
        className="max-w-[350px] flex w-full flex-wrap py-6 rounded-3xl px-4 border border-white mt-6"
      >
        <input
          type="text"
          placeholder="Nombre y apellido"
          className="outline-none py-4 px-2 w-full bg-pink border-b-[1px] mb-4 border-white placeholder:text-center placeholder:text-white placeholder:font-semibold text-center"
          required
        />
        <input
          type="email"
          placeholder="Mail"
          className="outline-none p-2 w-full bg-pink border-b-[1px] mb-4 border-white py-4 px-2 placeholder:text-center placeholder:text-white placeholder:font-semibold text-center"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="outline-none p-2 w-full bg-pink border-b-[1px] mb-4 border-white py-4 px-2 placeholder:text-center placeholder:text-white placeholder:font-semibold text-center"
          required
        />

        <input
          type="submit"
          value="aceptar"
          className="w-full rounded-md bg-primary-blue text-white uppercase p-2 font-bold mt-10 max-w-[275px] mx-auto"
        />
      </form>
    </main>
  );
}
