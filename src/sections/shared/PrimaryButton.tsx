interface Props {
  title: string;
  backgroundColor: string;
  color?: string;
  shadow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClickEvent?: () => void;
  customStyles?: string;
}
export function PrimaryButton({
  title,
  color = "#ffffff",
  backgroundColor,
  shadow = false,
  type = "button",
  disabled = false,
  onClickEvent,
  customStyles,
}: Props) {
  return (
    <>
      <button
        className={customStyles}
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
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
}
