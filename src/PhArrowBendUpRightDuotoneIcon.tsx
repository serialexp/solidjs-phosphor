import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendUpRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTA0bC00OCw0OFY1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjkuNjYsOTguMzRsLTQ4LTQ4QTgsOCwwLDAsMCwxNjgsNTZWOTZIMTI4QTEwNC4xMSwxMDQuMTEsMCwwLDAsMjQsMjAwYTgsOCwwLDAsMCwxNiwwLDg4LjEsODguMSwwLDAsMSw4OC04OGg0MHY0MGE4LDgsMCwwLDAsMTMuNjYsNS42Nmw0OC00OEE4LDgsMCwwLDAsMjI5LjY2LDk4LjM0Wk0xODQsMTMyLjY5Vjc1LjMxTDIxMi42OSwxMDRaIi8+PC9zdmc+)
 */
export function PhArrowBendUpRightDuotoneIcon(props: PhArrowBendUpRightDuotoneIconProps) {
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
      <path d="M224,104l-48,48V56Z" opacity="0.2"/><path d="M229.66,98.34l-48-48A8,8,0,0,0,168,56V96H128A104.11,104.11,0,0,0,24,200a8,8,0,0,0,16,0,88.1,88.1,0,0,1,88-88h40v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,98.34ZM184,132.69V75.31L212.69,104Z"/>
    </svg>
  );
}
