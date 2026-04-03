import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMemoryThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjBIMjRBMTIsMTIsMCwwLDAsMTIsNzJWMjAwYTQsNCwwLDAsMCw4LDBWMTgwSDQ0djIwYTQsNCwwLDAsMCw4LDBWMTgwSDc2djIwYTQsNCwwLDAsMCw4LDBWMTgwaDI0djIwYTQsNCwwLDAsMCw4LDBWMTgwaDI0djIwYTQsNCwwLDAsMCw4LDBWMTgwaDI0djIwYTQsNCwwLDAsMCw4LDBWMTgwaDI0djIwYTQsNCwwLDAsMCw4LDBWMTgwaDI0djIwYTQsNCwwLDAsMCw4LDBWNzJBMTIsMTIsMCwwLDAsMjMyLDYwWk0yMCw3MmE0LDQsMCwwLDEsNC00SDIzMmE0LDQsMCwwLDEsNCw0VjE3MkgyMFptOTIsNzZhNCw0LDAsMCwwLDQtNFY5NmE0LDQsMCwwLDAtNC00SDQ4YTQsNCwwLDAsMC00LDR2NDhhNCw0LDAsMCwwLDQsNFpNNTIsMTAwaDU2djQwSDUyWm05Miw0OGg2NGE0LDQsMCwwLDAsNC00Vjk2YTQsNCwwLDAsMC00LTRIMTQ0YTQsNCwwLDAsMC00LDR2NDhBNCw0LDAsMCwwLDE0NCwxNDhabTQtNDhoNTZ2NDBIMTQ4WiIvPjwvc3ZnPg==)
 */
export function PhMemoryThinIcon(props: PhMemoryThinIconProps) {
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
      <path d="M232,60H24A12,12,0,0,0,12,72V200a4,4,0,0,0,8,0V180H44v20a4,4,0,0,0,8,0V180H76v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V72A12,12,0,0,0,232,60ZM20,72a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4V172H20Zm92,76a4,4,0,0,0,4-4V96a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4ZM52,100h56v40H52Zm92,48h64a4,4,0,0,0,4-4V96a4,4,0,0,0-4-4H144a4,4,0,0,0-4,4v48A4,4,0,0,0,144,148Zm4-48h56v40H148Z"/>
    </svg>
  );
}
