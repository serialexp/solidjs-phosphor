import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMoonFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuNTQsMTUwLjIxYTEwNC44NCwxMDQuODQsMCwwLDEtMzcsNTIuOTFBMTA0LDEwNCwwLDAsMSwzMiwxMjAsMTAzLjA5LDEwMy4wOSwwLDAsMSw1Mi44OCw1Ny40OGExMDQuODQsMTA0Ljg0LDAsMCwxLDUyLjkxLTM3LDgsOCwwLDAsMSwxMCwxMCw4OC4wOCw4OC4wOCwwLDAsMCwxMDkuOCwxMDkuOCw4LDgsMCwwLDEsMTAsMTBaIi8+PC9zdmc+)
 */
export function PhMoonFillIcon(props: PhMoonFillIconProps) {
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
      <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"/>
    </svg>
  );
}
