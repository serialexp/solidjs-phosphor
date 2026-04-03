import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTumblrLogoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTI0YTEyLDEyLDAsMCwwLDEyLTEyVjcyYTEyLDEyLDAsMCwwLTEyLTEySDE1NlYyNGExMiwxMiwwLDAsMC0xMi0xMkgxMTJhMTIsMTIsMCwwLDAtMTIsMTJBMzYsMzYsMCwwLDEsNjQsNjAsMTIsMTIsMCwwLDAsNTIsNzJ2NDBhMTIsMTIsMCwwLDAsMTIsMTJIODR2NTJhNjguMDcsNjguMDcsMCwwLDAsNjgsNjhoNDBhMTIsMTIsMCwwLDAsMTItMTJWMTg0YTEyLDEyLDAsMCwwLTEyLTEySDE2MGE0LDQsMCwwLDEtNC00VjEyNFptLTMyLDcyaDIwdjI0SDE1MmE0NC4wNSw0NC4wNSwwLDAsMS00NC00NFYxMTJhMTIsMTIsMCwwLDAtMTItMTJINzZWODIuNzlBNjAuMTgsNjAuMTgsMCwwLDAsMTIyLjc5LDM2SDEzMlY3MmExMiwxMiwwLDAsMCwxMiwxMmgzNnYxNkgxNDRhMTIsMTIsMCwwLDAtMTIsMTJ2NTZBMjgsMjgsMCwwLDAsMTYwLDE5NloiLz48L3N2Zz4=)
 */
export function PhTumblrLogoBoldIcon(props: PhTumblrLogoBoldIconProps) {
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
      <path d="M192,124a12,12,0,0,0,12-12V72a12,12,0,0,0-12-12H156V24a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12A36,36,0,0,1,64,60,12,12,0,0,0,52,72v40a12,12,0,0,0,12,12H84v52a68.07,68.07,0,0,0,68,68h40a12,12,0,0,0,12-12V184a12,12,0,0,0-12-12H160a4,4,0,0,1-4-4V124Zm-32,72h20v24H152a44.05,44.05,0,0,1-44-44V112a12,12,0,0,0-12-12H76V82.79A60.18,60.18,0,0,0,122.79,36H132V72a12,12,0,0,0,12,12h36v16H144a12,12,0,0,0-12,12v56A28,28,0,0,0,160,196Z"/>
    </svg>
  );
}
