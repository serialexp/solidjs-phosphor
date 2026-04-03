import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrainSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjhINzJBMjgsMjgsMCwwLDAsNDQsNTZWMTg0YTI4LDI4LDAsMCwwLDI4LDI4SDg4TDY4LjgsMjM3LjZhNCw0LDAsMSwwLDYuNCw0LjhMOTgsMjEyaDYwbDIyLjgsMzAuNGE0LDQsMCwwLDAsNi40LTQuOEwxNjgsMjEyaDE2YTI4LDI4LDAsMCwwLDI4LTI4VjU2QTI4LDI4LDAsMCwwLDE4NCwyOFpNNzIsMzZIMTg0YTIwLDIwLDAsMCwxLDIwLDIwdjY4SDUyVjU2QTIwLDIwLDAsMCwxLDcyLDM2Wk0xODQsMjA0SDcyYTIwLDIwLDAsMCwxLTIwLTIwVjEzMkgyMDR2NTJBMjAsMjAsMCwwLDEsMTg0LDIwNFpNOTIsMTcyYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDkyLDE3MlptODgsMGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxODAsMTcyWiIvPjwvc3ZnPg==)
 */
export function PhTrainSimpleThinIcon(props: PhTrainSimpleThinIconProps) {
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
      <path d="M184,28H72A28,28,0,0,0,44,56V184a28,28,0,0,0,28,28H88L68.8,237.6a4,4,0,1,0,6.4,4.8L98,212h60l22.8,30.4a4,4,0,0,0,6.4-4.8L168,212h16a28,28,0,0,0,28-28V56A28,28,0,0,0,184,28ZM72,36H184a20,20,0,0,1,20,20v68H52V56A20,20,0,0,1,72,36ZM184,204H72a20,20,0,0,1-20-20V132H204v52A20,20,0,0,1,184,204ZM92,172a8,8,0,1,1-8-8A8,8,0,0,1,92,172Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,180,172Z"/>
    </svg>
  );
}
