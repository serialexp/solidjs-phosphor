import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendDownRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMTYwLjQ5bC00OCw0OGExMiwxMiwwLDAsMS0xNy0xN0wxOTUsMTY0SDEyOEExMDguMTIsMTA4LjEyLDAsMCwxLDIwLDU2YTEyLDEyLDAsMCwxLDI0LDAsODQuMDksODQuMDksMCwwLDAsODQsODRoNjdsLTI3LjUyLTI3LjUxYTEyLDEyLDAsMCwxLDE3LTE3bDQ4LDQ4QTEyLDEyLDAsMCwxLDIzMi40OSwxNjAuNDlaIi8+PC9zdmc+)
 */
export function PhArrowBendDownRightBoldIcon(props: PhArrowBendDownRightBoldIconProps) {
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
      <path d="M232.49,160.49l-48,48a12,12,0,0,1-17-17L195,164H128A108.12,108.12,0,0,1,20,56a12,12,0,0,1,24,0,84.09,84.09,0,0,0,84,84h67l-27.52-27.51a12,12,0,0,1,17-17l48,48A12,12,0,0,1,232.49,160.49Z"/>
    </svg>
  );
}
