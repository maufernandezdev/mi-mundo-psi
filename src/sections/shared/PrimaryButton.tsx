interface Props {
  title: string;
  backgroundColor: string;
  color?: string;
  shadow?: boolean;
  type?: "button" | "submit";
  onClickEvent?: () => void;
}
export function PrimaryButton({
  title,
  color = "#ffffff",
  backgroundColor,
  shadow = false,
  type = "button",
  onClickEvent,
}: Props) {
  return (
    <>
      <button
        style={{
          borderRadius: "20px",
          color: color,
          backgroundColor: backgroundColor,
          padding: "0.3rem 3rem",
          border: "none",
          outline: "none",
          boxShadow: shadow ? "0px 0px 5px 1px rgba(0,0,0,0.75)" : "",
          textTransform: "uppercase",
          fontWeight: "700",
        }}
        type={type}
        onClick={onClickEvent}
      >
        {title}
      </button>
    </>
  );
}
