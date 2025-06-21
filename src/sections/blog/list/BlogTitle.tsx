interface Props {
  text: string;
}
export function BlogTitle({ text }: Props) {
  return (
    <h1 className="font-baby-doll text-[32px] font-bold text-green-500 text-center">
      {text}
    </h1>
  );
}
