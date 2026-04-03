import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUDownLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTEyYTYyLjA3LDYyLjA3LDAsMCwxLTYyLDYySDQ2LjQ5bDM3Ljc1LDM3Ljc2YTYsNiwwLDEsMS04LjQ4LDguNDhsLTQ4LTQ4YTYsNiwwLDAsMSwwLTguNDhsNDgtNDhhNiw2LDAsMCwxLDguNDgsOC40OEw0Ni40OSwxNjJIMTY4YTUwLDUwLDAsMCwwLDAtMTAwSDgwYTYsNiwwLDAsMSwwLTEyaDg4QTYyLjA3LDYyLjA3LDAsMCwxLDIzMCwxMTJaIi8+PC9zdmc+)
 */
export function PhArrowUDownLeftLightIcon(props: PhArrowUDownLeftLightIconProps) {
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
      <path d="M230,112a62.07,62.07,0,0,1-62,62H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,162H168a50,50,0,0,0,0-100H80a6,6,0,0,1,0-12h88A62.07,62.07,0,0,1,230,112Z"/>
    </svg>
  );
}
