import { MdDevicesOther } from "react-icons/md";

interface Props {
  text: string;
}

export function Requirements({ text }: Props) {
  return (
    <div style={{ width: "100%" }}>
      <MdDevicesOther className="text-primary-blue text-[60px] m-auto"></MdDevicesOther>
      <h3 className="text-primary-blue font-bold text-[17px] mt-2">
        ¿QUE NECESITAS?
      </h3>
      <p className="text-primary-blue text-[13px] max-w-[300px] m-auto">
        Dispositivo reproduzca: <br /> audio-vídeo, lector PDF.
      </p>
    </div>
  );
}
