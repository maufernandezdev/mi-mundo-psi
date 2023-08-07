import { TbWorldUpload } from "react-icons/tb";

interface Props {
  text: string;
}

export function Modality({ text }: Props) {
  return (
    <div style={{ width: "100%" }}>
      <TbWorldUpload className="text-primary-blue text-[60px] m-auto"></TbWorldUpload>
      <h3 className="text-primary-blue font-bold text-[17px] mt-2">
        MODALIDAD
      </h3>
      <p className="text-primary-blue text-[13px] max-w-[300px] m-auto">
        {text}
      </p>
    </div>
  );
}
