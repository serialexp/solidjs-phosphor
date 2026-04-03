import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaperclipHorizontalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIsMTI4YTYwLjA3LDYwLjA3LDAsMCwxLTYwLDYwSDQ0YTQwLDQwLDAsMCwxLDAtODBIMTg0YTEyLDEyLDAsMCwxLDAsMjRINDRhMTYsMTYsMCwwLDAsMCwzMkgxOTJhMzYsMzYsMCwwLDAsMC03Mkg4MGExMiwxMiwwLDAsMSwwLTI0SDE5MkE2MC4wNyw2MC4wNywwLDAsMSwyNTIsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhPaperclipHorizontalBoldIcon(props: PhPaperclipHorizontalBoldIconProps) {
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
      <path d="M252,128a60.07,60.07,0,0,1-60,60H44a40,40,0,0,1,0-80H184a12,12,0,0,1,0,24H44a16,16,0,0,0,0,32H192a36,36,0,0,0,0-72H80a12,12,0,0,1,0-24H192A60.07,60.07,0,0,1,252,128Z"/>
    </svg>
  );
}
