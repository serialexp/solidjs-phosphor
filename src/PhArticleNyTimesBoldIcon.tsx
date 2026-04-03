import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArticleNyTimesBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsOTJhMTIsMTIsMCwwLDEsMTItMTJoNjRhMTIsMTIsMCwwLDEsMCwyNEgxNjhBMTIsMTIsMCwwLDEsMTU2LDkyWm03NiwyOEgxNjhhMTIsMTIsMCwwLDAsMCwyNGg2NGExMiwxMiwwLDAsMCwwLTI0Wm0wLDQwSDgwYTEyLDEyLDAsMCwwLDAsMjRIMjMyYTEyLDEyLDAsMCwwLDAtMjRabTAsNDBIODBhMTIsMTIsMCwwLDAsMCwyNEgyMzJhMTIsMTIsMCwwLDAsMC0yNFpNOTYsMTQ0YTEyLDEyLDAsMCwwLDAtMjRIOTJWNjhoMjR2NGExMiwxMiwwLDAsMCwyNCwwVjU2YTEyLDEyLDAsMCwwLTEyLTEySDMyQTEyLDEyLDAsMCwwLDIwLDU2VjcyYTEyLDEyLDAsMCwwLDI0LDBWNjhINjh2NTJINjRhMTIsMTIsMCwwLDAsMCwyNFoiLz48L3N2Zz4=)
 */
export function PhArticleNyTimesBoldIcon(props: PhArticleNyTimesBoldIconProps) {
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
      <path d="M156,92a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H168A12,12,0,0,1,156,92Zm76,28H168a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM96,144a12,12,0,0,0,0-24H92V68h24v4a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H32A12,12,0,0,0,20,56V72a12,12,0,0,0,24,0V68H68v52H64a12,12,0,0,0,0,24Z"/>
    </svg>
  );
}
