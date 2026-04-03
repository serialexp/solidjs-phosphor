import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUDownRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMTcyLjI0bC00OCw0OGE2LDYsMCwwLDEtOC40OC04LjQ4TDIwOS41MSwxNzRIODhBNjIsNjIsMCwwLDEsODgsNTBoODhhNiw2LDAsMCwxLDAsMTJIODhhNTAsNTAsMCwwLDAsMCwxMDBIMjA5LjUxbC0zNy43NS0zNy43NmE2LDYsMCwwLDEsOC40OC04LjQ4bDQ4LDQ4QTYsNiwwLDAsMSwyMjguMjQsMTcyLjI0WiIvPjwvc3ZnPg==)
 */
export function PhArrowUDownRightLightIcon(props: PhArrowUDownRightLightIconProps) {
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
      <path d="M228.24,172.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,174H88A62,62,0,0,1,88,50h88a6,6,0,0,1,0,12H88a50,50,0,0,0,0,100H209.51l-37.75-37.76a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,172.24Z"/>
    </svg>
  );
}
