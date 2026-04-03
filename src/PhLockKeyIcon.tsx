import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockKeyIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTEyYTI4LDI4LDAsMCwwLTgsNTQuODNWMTg0YTgsOCwwLDAsMCwxNiwwVjE2Ni44M0EyOCwyOCwwLDAsMCwxMjgsMTEyWm0wLDQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNTJabTgwLTcySDE3NlY1NmE0OCw0OCwwLDAsMC05NiwwVjgwSDQ4QTE2LDE2LDAsMCwwLDMyLDk2VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWOTZBMTYsMTYsMCwwLDAsMjA4LDgwWk05Niw1NmEzMiwzMiwwLDAsMSw2NCwwVjgwSDk2Wk0yMDgsMjA4SDQ4Vjk2SDIwOFYyMDhaIi8+PC9zdmc+)
 */
export function PhLockKeyIcon(props: PhLockKeyIconProps) {
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
      <path d="M128,112a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm80-72H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"/>
    </svg>
  );
}
