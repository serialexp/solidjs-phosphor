import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAsteriskSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEsMTAzLjQzbC03MC4xMywyOCw0OS40Nyw2My42MWE4LDgsMCwxLDEtMTIuNjMsOS44MkwxMjgsMTQxLDc4LjMyLDIwNC45MWE4LDgsMCwwLDEtMTIuNjMtOS44Mmw0OS40Ny02My42MUw0NSwxMDMuNDNBOCw4LDAsMCwxLDUxLDg4LjU3bDY5LDI3LjYxVjQwYTgsOCwwLDAsMSwxNiwwdjc2LjE4bDY5LTI3LjYxQTgsOCwwLDEsMSwyMTEsMTAzLjQzWiIvPjwvc3ZnPg==)
 */
export function PhAsteriskSimpleIcon(props: PhAsteriskSimpleIconProps) {
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
      <path d="M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z"/>
    </svg>
  );
}
