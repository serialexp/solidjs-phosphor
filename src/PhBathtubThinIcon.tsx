import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBathtubThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTAwSDIwNFY5NmE0LDQsMCwwLDAtNC00SDEzNmE0LDQsMCwwLDAtNCw0djRINjBWNTJBMTYsMTYsMCwwLDEsNzYsMzYsMTYuNDksMTYuNDksMCwwLDEsOTIuMDgsNDguOGE0LDQsMCwxLDAsNy44NC0xLjZBMjQuMzIsMjQuMzIsMCwwLDAsNzYsMjgsMjQsMjQsMCwwLDAsNTIsNTJ2NDhIMTZhNCw0LDAsMCwwLTQsNHY0MGE1Mi4wNiw1Mi4wNiwwLDAsMCw1Miw1Mmg0djIwYTQsNCwwLDAsMCw4LDBWMTk2SDE4MHYyMGE0LDQsMCwwLDAsOCwwVjE5Nmg0YTUyLjA2LDUyLjA2LDAsMCwwLDUyLTUyVjEwNEE0LDQsMCwwLDAsMjQwLDEwMFptLTEwMCwwaDU2djQwSDE0MFptOTYsNDRhNDQuMDUsNDQuMDUsMCwwLDEtNDQsNDRINjRhNDQuMDUsNDQuMDUsMCwwLDEtNDQtNDRWMTA4SDEzMnYzNmE0LDQsMCwwLDAsNCw0aDY0YTQsNCwwLDAsMCw0LTRWMTA4aDMyWiIvPjwvc3ZnPg==)
 */
export function PhBathtubThinIcon(props: PhBathtubThinIconProps) {
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
      <path d="M240,100H204V96a4,4,0,0,0-4-4H136a4,4,0,0,0-4,4v4H60V52A16,16,0,0,1,76,36,16.49,16.49,0,0,1,92.08,48.8a4,4,0,1,0,7.84-1.6A24.32,24.32,0,0,0,76,28,24,24,0,0,0,52,52v48H16a4,4,0,0,0-4,4v40a52.06,52.06,0,0,0,52,52h4v20a4,4,0,0,0,8,0V196H180v20a4,4,0,0,0,8,0V196h4a52.06,52.06,0,0,0,52-52V104A4,4,0,0,0,240,100Zm-100,0h56v40H140Zm96,44a44.05,44.05,0,0,1-44,44H64a44.05,44.05,0,0,1-44-44V108H132v36a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V108h32Z"/>
    </svg>
  );
}
