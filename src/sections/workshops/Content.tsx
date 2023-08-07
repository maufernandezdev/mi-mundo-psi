import { BiBookBookmark } from "react-icons/bi";

interface Props {
  text: string;
  secondText?: string;
}
export function Content({ text, secondText }: Props) {
  return (
    <div style={{ width: "100%" }}>
      <BiBookBookmark className="text-primary-blue text-[60px] m-auto"></BiBookBookmark>
      <h3 className="text-primary-blue font-bold text-[17px] mt-2">
        CONTENIDO
      </h3>
      <p className="text-primary-blue text-[13px] max-w-[300px] m-auto">
        {text}
      </p>
      <p className="text-primary-blue text-[13px] max-w-[300px] m-auto">
        {secondText}
      </p>
    </div>
  );
}
