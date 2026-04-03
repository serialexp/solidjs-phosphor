import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFilePdfBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTY0djhoMTJhMTIsMTIsMCwwLDEsMCwyNEgyMDB2MTJhMTIsMTIsMCwwLDEtMjQsMFYxNTJhMTIsMTIsMCwwLDEsMTItMTJoMzJhMTIsMTIsMCwwLDEsMCwyNFpNOTIsMTcyYTMyLDMyLDAsMCwxLTMyLDMySDU2djRhMTIsMTIsMCwwLDEtMjQsMFYxNTJhMTIsMTIsMCwwLDEsMTItMTJINjBBMzIsMzIsMCwwLDEsOTIsMTcyWm0tMjQsMGE4LDgsMCwwLDAtOC04SDU2djE2aDRBOCw4LDAsMCwwLDY4LDE3MlptMTAwLDhhNDAsNDAsMCwwLDEtNDAsNDBIMTEyYTEyLDEyLDAsMCwxLTEyLTEyVjE1MmExMiwxMiwwLDAsMSwxMi0xMmgxNkE0MCw0MCwwLDAsMSwxNjgsMTgwWm0tMjQsMGExNiwxNiwwLDAsMC0xNi0xNmgtNHYzMmg0QTE2LDE2LDAsMCwwLDE0NCwxODBaTTM2LDEwOFY0MEEyMCwyMCwwLDAsMSw1NiwyMGg5NmExMiwxMiwwLDAsMSw4LjQ5LDMuNTJsNTYsNTZBMTIsMTIsMCwwLDEsMjIwLDg4djIwYTEyLDEyLDAsMCwxLTI0LDB2LTRIMTQ4YTEyLDEyLDAsMCwxLTEyLTEyVjQ0SDYwdjY0YTEyLDEyLDAsMCwxLTI0LDBaTTE2MCw1N1Y4MGgyM1oiLz48L3N2Zz4=)
 */
export function PhFilePdfBoldIcon(props: PhFilePdfBoldIconProps) {
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
      <path d="M200,164v8h12a12,12,0,0,1,0,24H200v12a12,12,0,0,1-24,0V152a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24ZM92,172a32,32,0,0,1-32,32H56v4a12,12,0,0,1-24,0V152a12,12,0,0,1,12-12H60A32,32,0,0,1,92,172Zm-24,0a8,8,0,0,0-8-8H56v16h4A8,8,0,0,0,68,172Zm100,8a40,40,0,0,1-40,40H112a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h16A40,40,0,0,1,168,180Zm-24,0a16,16,0,0,0-16-16h-4v32h4A16,16,0,0,0,144,180ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,57V80h23Z"/>
    </svg>
  );
}
