"use client";
import { PrimaryButton } from "../shared/PrimaryButton";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export function Contact() {
  const [submitButtonValue, setSubmitButtonValue] = useState("Enviar");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSendStatus, setEmailSendStatus] = useState({
    status: "empty",
    message: "",
  });
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsSendingEmail(true);
    setSubmitButtonValue("Enviando...");
    const serviceID = "service_twmtiu8";
    const templateID = "template_75dp3oz";
    const publicKey = "RMH0qeOLiioEqnILw";
    const res = await emailjs.sendForm(serviceID, templateID, e.target, {
      publicKey: publicKey,
    });
    if (res.status === 200) {
      setEmailSendStatus({
        status: "success",
        message: "Tu consulta fue enviada correctactamente.",
      });
    } else {
      setEmailSendStatus({
        status: "error",
        message: "Ocurrió un error al enviar tu consulta.",
      });
    }
    setSubmitButtonValue("Enviar");
    e.target.reset();

    setTimeout(() => {
      setEmailSendStatus({ status: "empty", message: "" });
    }, 5000);
    setIsSendingEmail(false);
  };
  return (
    <div className="bg-green px-4 pt-10 pb-12" id="contacto">
      <h2 className="font-baby-doll text-primary-blue font-semibold text-subtitle uppercase text-center lg:text-title">
        contacta con nosotras
      </h2>
      <p className="text-white text-custom-text text-center font-bold mb-8 max-w-[600px] mx-auto">
        Ofrecemos terapia online, con la facilidad que puedas conectarte desde
        cualquier lugar y momento.
      </p>
      <p className="text-primary-blue text-custom-text text-center mb-6 lg:mb-10 max-w-[600px] mx-auto font-semibold">
        Te invitamos a comenzar un proceso terapéutico de profundos cambios y
        autoconocimiento. Te acompañaremos a mirarte y escucharte, para así
        encontrar los verdaderos motivos de sufrimiento y brindarte herramientas
        o recursos para poder enfrentarlos.
        <br /> <br />
        Si estas interesado en comenzar un proceso terapéutico completa el
        siguiente formulario, luego nos comunicaremos con vos para poder
        coordinar un primer encuentro.
      </p>
      <div className="bg-pink p-4 rounded-lg mb-10 lg:mb-14 w-full max-w-[750px] mx-auto">
        <form onSubmit={onSubmit} className="w-full max-w-[750px]" id="form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            className="rounded-lg text-custom-text p-2 text-primary-blue w-full mb-4 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Dirección de correo electrónico"
            className="rounded-lg text-custom-text p-2 text-primary-blue w-full mb-4 outline-none"
            required
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            className="rounded-lg text-custom-text p-2 text-primary-blue w-full mb-4 outline-none"
            required
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Mensaje"
            className="rounded-lg text-custom-text p-2 text-primary-blue w-full mb-4 outline-none"
            required
          ></textarea>
          <div className="text-center">
            <PrimaryButton
              title={submitButtonValue}
              backgroundColor="#5f728d"
              type="submit"
              disabled={isSendingEmail}
            ></PrimaryButton>
            {emailSendStatus.status !== "empty" && (
              <div className="mt-4">
                <p className="text-custom-text">{emailSendStatus.message}</p>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="flex flex-wrap lg:justify-center">
        <div className="mb-4">
          <h3 className="font-baby-doll text-white w-auto px-2 rounded-lg text-[18px] bg-orange">
            CONTACTANOS POR NUESTRAS REDES
          </h3>
        </div>
        <div className="w-full lg:flex lg:justify-center lg:flex-wrap">
          <div className="flex mb-2 items-center lg:w-full lg:justify-center">
            <Link
              className="bg-blue-grey rounded-full flex items-center justify-center w-[30px] h-[30px]"
              href="https://www.instagram.com/mi.mundo.psi"
              target="_blank"
            >
              <BsInstagram className="text-white text-[20px]"></BsInstagram>
            </Link>
            <Link
              className="ml-2 font-semibold text-white"
              href="https://www.instagram.com/mi.mundo.psi"
              target="_blank"
            >
              mi.mundo.psi
            </Link>
          </div>
          <div className="flex items-center lg:w-full lg:justify-center">
            <div className="bg-blue-grey rounded-full flex items-center justify-center w-[30px] h-[30px]">
              <AiOutlineMail className="text-white text-[20px]"></AiOutlineMail>
            </div>
            <Link
              className="ml-2 font-semibold text-white"
              href="mailto:psimimundo@gmail.com"
            >
              psimimundo@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
