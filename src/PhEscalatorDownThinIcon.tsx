import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEscalatorDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuMTcsODIuODNhNCw0LDAsMCwxLDUuNjYtNS42NkwxOTYsOTQuMzRWNDhhNCw0LDAsMCwxLDgsMFY5NC4zNGwxNy4xNy0xNy4xN2E0LDQsMCwxLDEsNS42Niw1LjY2bC0yNCwyNGE0LDQsMCwwLDEtNS42NiwwWk0yMzYsMTYwdjQwYTEyLDEyLDAsMCwxLTEyLDEySDE2OGE0LDQsMCwwLDEtMi45NC0xLjI5TDcwLjI1LDEwOEgzMkExMiwxMiwwLDAsMSwyMCw5NlY1NkExMiwxMiwwLDAsMSwzMiw0NEg4OGE0LDQsMCwwLDEsMi45NCwxLjI5TDE4NS43NSwxNDhIMjI0QTEyLDEyLDAsMCwxLDIzNiwxNjBabS04LDBhNCw0LDAsMCwwLTQtNEgxODRhNCw0LDAsMCwxLTIuOTQtMS4yOUw4Ni4yNSw1MkgzMmE0LDQsMCwwLDAtNCw0Vjk2YTQsNCwwLDAsMCw0LDRINzJhNCw0LDAsMCwxLDIuOTQsMS4yOUwxNjkuNzUsMjA0SDIyNGE0LDQsMCwwLDAsNC00WiIvPjwvc3ZnPg==)
 */
export function PhEscalatorDownThinIcon(props: PhEscalatorDownThinIconProps) {
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
      <path d="M173.17,82.83a4,4,0,0,1,5.66-5.66L196,94.34V48a4,4,0,0,1,8,0V94.34l17.17-17.17a4,4,0,1,1,5.66,5.66l-24,24a4,4,0,0,1-5.66,0ZM236,160v40a12,12,0,0,1-12,12H168a4,4,0,0,1-2.94-1.29L70.25,108H32A12,12,0,0,1,20,96V56A12,12,0,0,1,32,44H88a4,4,0,0,1,2.94,1.29L185.75,148H224A12,12,0,0,1,236,160Zm-8,0a4,4,0,0,0-4-4H184a4,4,0,0,1-2.94-1.29L86.25,52H32a4,4,0,0,0-4,4V96a4,4,0,0,0,4,4H72a4,4,0,0,1,2.94,1.29L169.75,204H224a4,4,0,0,0,4-4Z"/>
    </svg>
  );
}
