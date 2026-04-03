import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTornadoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDBhOCw4LDAsMCwxLTgsOEg1NmE4LDgsMCwwLDEsMC0xNkgyMjRBOCw4LDAsMCwxLDIzMiw0MFpNMTg0LDcyYTgsOCwwLDAsMC04LThIMzJhOCw4LDAsMCwwLDAsMTZIMTc2QTgsOCwwLDAsMCwxODQsNzJabS0xNiwzMmE4LDgsMCwwLDAtOC04SDU2YTgsOCwwLDAsMCwwLDE2SDE2MEE4LDgsMCwwLDAsMTY4LDEwNFptMTYsMzJhOCw4LDAsMCwwLTgtOEg4OGE4LDgsMCwwLDAsMCwxNmg4OEE4LDgsMCwwLDAsMTg0LDEzNlptMCwyNEgxMjBhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZabS0yNCwzMkgxMjhhOCw4LDAsMCwwLDAsMTZoMzJhOCw4LDAsMCwwLDAtMTZabS0zMiwzMkgxMTJhOCw4LDAsMCwwLDAsMTZoMTZhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhTornadoIcon(props: PhTornadoIconProps) {
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
      <path d="M232,40a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H224A8,8,0,0,1,232,40ZM184,72a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H176A8,8,0,0,0,184,72Zm-16,32a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H160A8,8,0,0,0,168,104Zm16,32a8,8,0,0,0-8-8H88a8,8,0,0,0,0,16h88A8,8,0,0,0,184,136Zm0,24H120a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-24,32H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-32,32H112a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
