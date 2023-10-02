"use client";
import { PrimaryButton } from "../shared/PrimaryButton";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
export function Contact() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("press sunmit");
  };
  return (
    <div className="bg-green px-4 pt-10 pb-12">
      <h2 className="font-baby-doll text-primary-blue font-semibold text-subtitle uppercase">
        contacta con nosotras
      </h2>
      <p className="text-white text-custom-text text-center font-bold mb-8">
        Ofrecemos terapia online, con la facilidad que puedas conectarte desde
        cualquier lugar y momento.
      </p>
      <p className="text-primary-blue text-custom-text text-center mb-6">
        Te invitamos a comenzar un proceso terapéutico de profundos cambios y
        autoconocimiento. Te acompañaremos a mirarte y escucharte, para así
        encontrar los verdaderos motivos de sufrimiento y brindarte herramientas
        o recursos para poder enfrentarlos.
        <br /> <br />
        Si estas interesado en comenzar un proceso terapéutico completa el
        siguiente formulario, luego nos comunicaremos con vos para poder
        coordinar un primer encuentro.
      </p>
      <div className="bg-pink p-4 rounded-lg mb-6">
        <form onSubmit={onSubmit} className="w-full max-w-[750px]">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="rounded-lg text-custom-text p-2 text-primary-blue w-full mb-4 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Dirección de correo electrónico"
            className="rounded-lg text-custom-text p-2 text-primary-blue w-full mb-4 outline-none"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Teléfono"
            className="rounded-lg text-custom-text p-2 text-primary-blue w-full mb-4 outline-none"
            required
          />
          <textarea
            name="msg"
            id="msg"
            cols={30}
            rows={10}
            placeholder="Mensaje"
            className="rounded-lg text-custom-text p-2 text-primary-blue w-full mb-4 outline-none"
            required
          ></textarea>
          <div className="text-center">
            <PrimaryButton
              title="Enviar"
              backgroundColor="#5f728d"
              type="submit"
            ></PrimaryButton>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap">
        <div className="mb-4">
          <h3 className="font-baby-doll bg-orange text-white w-auto px-2 rounded-lg text-[18px]">
            CONTACTANOS POR NUESTRAS REDES
          </h3>
        </div>
        <div className="w-full">
          <div className="flex mb-2 items-center">
            <div className="bg-blue-grey rounded-full flex items-center justify-center w-[30px] h-[30px]">
              <BsInstagram className="text-white text-[20px]"></BsInstagram>
            </div>
            <p className="ml-2 font-semibold text-white">mi.mundo.psi</p>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-grey rounded-full flex items-center justify-center w-[30px] h-[30px]">
              <AiOutlineMail className="text-white text-[20px]"></AiOutlineMail>
            </div>
            <p className="ml-2 font-semibold text-white">
              psimimundo@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
