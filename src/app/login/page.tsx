"use client";
import logoColor from "@/assets/images/logo-color.png";
import Image from "next/image";
import { FormEvent } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";

export default function Login() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className="bg-sky-green h-[92vh] overflow-y-hidden flex items-center flex-wrap justify-center flex-col">
      <div className="flex w-full justify-center">
        <Image src={logoColor} width={80} height={60} alt="logo"></Image>
      </div>
      <h2 className="text-center font-baby-doll text-[27px] text-primary-blue uppercase mt-1">
        Mi mundo psi
      </h2>
      <form
        onSubmit={onSubmit}
        className="max-w-[350px] flex w-full flex-wrap mt-4 py-6 border border-white px-4 rounded-3xl"
      >
        <div className="flex w-full mb-2 rounded-md p-1 bg-white">
          <div className="bg-sky-green p-2 rounded-md mr-2 flex items-center w-[45px] justify-center">
            <AiOutlineUser className="text-white text-[25px]"></AiOutlineUser>
          </div>
          <input
            type="email"
            placeholder="Mail"
            className="outline-none p-2"
            required
          />
        </div>
        <div className="flex w-full mb-2 rounded-md p-1 bg-white">
          <div className="bg-sky-green p-2 rounded-md mr-2 flex items-center w-[45px] justify-center">
            <GiPadlock className="text-white text-[25px]"></GiPadlock>
          </div>
          <input
            type="password"
            placeholder="Contraseña"
            className="p-2 outline-none"
            required
          />
        </div>
        <input
          type="submit"
          value="login"
          className="w-full rounded-md bg-primary-blue text-white uppercase p-2 font-bold mt-4"
        />
      </form>
      <div className="flex w-full max-w-[350px] justify-between px-4 mt-6">
        <div>
          <input type="checkbox" />
          <label className="uppercase ml-1 text-white text-[15px] text-bold">
            recordar
          </label>
        </div>
        <p className="text-[15px] text-primary-blue font-semibold italic">
          ¿Olvidaste tu contraseña?
        </p>
      </div>
      <div className="h-[2px] bg-[#dddddd] w-full max-w-[325px] my-6"></div>
      <a
        className="text-[15px] text-primary-blue font-semibold mt-2 italic px-4"
        href="/registro"
      >
        Registrarse
      </a>
    </main>
  );
}
