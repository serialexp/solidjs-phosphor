import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMzJhNCw0LDAsMCwxLTQsNEg1NmE0LDQsMCwwLDEsMC04SDIwMEE0LDQsMCwwLDEsMjA0LDMyWk0xNzIsNzJWMjI0YTEyLDEyLDAsMCwxLTEyLDEySDk2YTEyLDEyLDAsMCwxLTEyLTEyVjcyQTEyLDEyLDAsMCwxLDk2LDYwaDY0QTEyLDEyLDAsMCwxLDE3Miw3MlptLTgsMGE0LDQsMCwwLDAtNC00SDk2YTQsNCwwLDAsMC00LDRWMjI0YTQsNCwwLDAsMCw0LDRoNjRhNCw0LDAsMCwwLDQtNFoiLz48L3N2Zz4=)
 */
export function PhAlignTopSimpleThinIcon(props: PhAlignTopSimpleThinIconProps) {
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
      <path d="M204,32a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,32ZM172,72V224a12,12,0,0,1-12,12H96a12,12,0,0,1-12-12V72A12,12,0,0,1,96,60h64A12,12,0,0,1,172,72Zm-8,0a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4V224a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4Z"/>
    </svg>
  );
}
