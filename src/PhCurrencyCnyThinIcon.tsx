import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyCnyThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02MCw1NmE0LDQsMCwwLDEsNC00SDE5MmE0LDQsMCwwLDEsMCw4SDY0QTQsNCwwLDAsMSw2MCw1NlpNMjE2LDE2NGE0LDQsMCwwLDAtNCw0djIwSDE3NmEyMCwyMCwwLDAsMS0yMC0yMFYxMTZoNTJhNCw0LDAsMCwwLDAtOEg0OGE0LDQsMCwwLDAsMCw4aDUydjEyYTYwLjA3LDYwLjA3LDAsMCwxLTYwLDYwLDQsNCwwLDAsMCwwLDgsNjguMDcsNjguMDcsMCwwLDAsNjgtNjhWMTE2aDQwdjUyYTI4LDI4LDAsMCwwLDI4LDI4aDQwYTQsNCwwLDAsMCw0LTRWMTY4QTQsNCwwLDAsMCwyMTYsMTY0WiIvPjwvc3ZnPg==)
 */
export function PhCurrencyCnyThinIcon(props: PhCurrencyCnyThinIconProps) {
  const merged = mergeProps({ size: "1em", color: "currentColor" }, props);
  const [local, svgProps] = splitProps(merged, ["size", "color"]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill={local.color}
      width={local.size}
      height={local.size}
      {...svgProps}
    >
      <path d="M60,56a4,4,0,0,1,4-4H192a4,4,0,0,1,0,8H64A4,4,0,0,1,60,56ZM216,164a4,4,0,0,0-4,4v20H176a20,20,0,0,1-20-20V116h52a4,4,0,0,0,0-8H48a4,4,0,0,0,0,8h52v12a60.07,60.07,0,0,1-60,60,4,4,0,0,0,0,8,68.07,68.07,0,0,0,68-68V116h40v52a28,28,0,0,0,28,28h40a4,4,0,0,0,4-4V168A4,4,0,0,0,216,164Z"/>
    </svg>
  );
}
