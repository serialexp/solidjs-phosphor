import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhQuotesThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsNjBINDBBMTIsMTIsMCwwLDAsMjgsNzJ2NjRhMTIsMTIsMCwwLDAsMTIsMTJoNjR2MTJhMzYsMzYsMCwwLDEtMzYsMzYsNCw0LDAsMCwwLDAsOCw0NC4wNSw0NC4wNSwwLDAsMCw0NC00NFY3MkExMiwxMiwwLDAsMCwxMDAsNjBabTQsODBINDBhNCw0LDAsMCwxLTQtNFY3MmE0LDQsMCwwLDEsNC00aDYwYTQsNCwwLDAsMSw0LDRaTTIxNiw2MEgxNTZhMTIsMTIsMCwwLDAtMTIsMTJ2NjRhMTIsMTIsMCwwLDAsMTIsMTJoNjR2MTJhMzYsMzYsMCwwLDEtMzYsMzYsNCw0LDAsMCwwLDAsOCw0NC4wNSw0NC4wNSwwLDAsMCw0NC00NFY3MkExMiwxMiwwLDAsMCwyMTYsNjBabTQsODBIMTU2YTQsNCwwLDAsMS00LTRWNzJhNCw0LDAsMCwxLDQtNGg2MGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
export function PhQuotesThinIcon(props: PhQuotesThinIconProps) {
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
      <path d="M100,60H40A12,12,0,0,0,28,72v64a12,12,0,0,0,12,12h64v12a36,36,0,0,1-36,36,4,4,0,0,0,0,8,44.05,44.05,0,0,0,44-44V72A12,12,0,0,0,100,60Zm4,80H40a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4ZM216,60H156a12,12,0,0,0-12,12v64a12,12,0,0,0,12,12h64v12a36,36,0,0,1-36,36,4,4,0,0,0,0,8,44.05,44.05,0,0,0,44-44V72A12,12,0,0,0,216,60Zm4,80H156a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
