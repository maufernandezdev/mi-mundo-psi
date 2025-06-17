import React, { useEffect, useState } from "react";
import type { FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { IResource } from "./Resourses";
import { PrimaryButton } from "../shared/PrimaryButton";
import { useForm } from "../hooks/useForm";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

interface Props extends PropsWithChildren {
  showModal?: boolean;
  onClose: () => void;
  selectedResource: IResource | undefined;
}

export const ModalResources: FC<Props> = ({
  showModal,
  onClose,
  selectedResource,
}) => {
  const { email, onChangeValue, resetForm } = useForm({
    email: "",
  });
  const [isBrowser, setIsBrowser] = useState(false);
  const [requestInProgress, setRequestInProgress] = useState(false);
  const [emailSendStatus, setEmailSendStatus] = useState({
    status: "empty",
    message: "",
  });
  const handleModalClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const handleClose = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClose();
    resetForm();
    setEmailSendStatus({
      status: "empty",
      message: "",
    });
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setRequestInProgress(true);
    const serviceID = "service_twmtiu8";
    const templateID = "template_75dp3oz";
    const publicKey = "RMH0qeOLiioEqnILw";
    const res = await emailjs.sendForm(serviceID, templateID, e.target, {
      publicKey: publicKey,
    });
    resetForm();
    e.target.reset();
    setRequestInProgress(false);
    if (res.status === 200) {
      setEmailSendStatus({
        status: "success",
        message: "Tu solicitud fue enviada correctactamente.",
      });
    } else {
      setEmailSendStatus({
        status: "error",
        message: "Ocurrió un error al enviar tu solicitud.",
      });
    }
  };

  useEffect(() => {
    setIsBrowser(showModal as boolean);
  }, [showModal]);

  const modalContent = showModal ? (
    <div
      className={`fixed ${
        !showModal ? "hidden" : ""
      } top-0 left-0 right-0 z-50 flex h-[calc(100%)] items-center overflow-y-auto overflow-x-hidden bg-[#000a] p-4 md:inset-0 md:h-full`}
      onClick={handleClose}
    >
      <AnimatePresence>
        <div className="relative mx-auto h-full w-full max-w-md md:h-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: 100 }}
            className="relative rounded-lg bg-black px-2 py-4 shadow bg-orange"
          >
            <button
              type="button"
              className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 opacity-80 hover:opacity-100"
            >
              <svg
                aria-hidden="true"
                className={`h-8 w-8 rounded-full p-1 `}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
              <span className="sr-only" onClick={handleClose}></span>
            </button>
            <div
              className="p-5 pt-10 text-center"
              onClick={(e) => handleModalClick(e)}
            >
              <section className="flex flex-wrap justify-center rounded-[4px]">
                <form onSubmit={onSubmit}>
                  <p className="text-primary-blue text-[18px] font-bold mb-4">
                    Ingrese su mail para recibir el recurso solicitado:
                  </p>
                  {selectedResource && (
                    <p className="text-primary-blue text-[14px] font-semibold mb-6">
                      "{selectedResource.title}"
                    </p>
                  )}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    className="px-4 py-4 border-none outline-none rounded-lg w-full mb-4"
                    required
                    // value={email}
                    onChange={onChangeValue}
                  />
                  <input
                    type="text"
                    className="hidden"
                    name="name"
                    value="solicitud de recurso"
                  />
                  <input type="text" className="hidden" name="phone" value="" />
                  <input
                    type="text"
                    className="hidden"
                    name="message"
                    value={`Se solicito el recurso --> ${selectedResource?.title}`}
                  />

                  <PrimaryButton
                    type="submit"
                    customStyles="w-full"
                    title={requestInProgress ? "Solicitando..." : "Solicitar"}
                    backgroundColor="#5f728d"
                  ></PrimaryButton>
                  {emailSendStatus.status === "success" && (
                    <p className="text-primary-blue text-[14px] font-semibold mt-2">
                      {emailSendStatus.message}
                    </p>
                  )}
                  {emailSendStatus.status === "error" && (
                    <p className="text-primary-blue text-[14px] font-semibold mt-2">
                      {emailSendStatus.message}
                    </p>
                  )}
                </form>
              </section>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("login-modal") as HTMLElement
    );
  } else {
    return null;
  }
};
