import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleDoubleUpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguNzEsNTcuMjlBMTAwLDEwMCwwLDEsMCw1Ny4yOSwxOTguNzEsMTAwLDEwMCwwLDEsMCwxOTguNzEsNTcuMjlabS01LjY2LDEzNS43NkE5Miw5MiwwLDEsMSwyMjAsMTI4LDkxLjM3LDkxLjM3LDAsMCwxLDE5My4wNSwxOTMuMDVabS0zMC4yMi0yNy44OGE0LDQsMCwwLDEtNS42Niw1LjY2TDEyOCwxNDEuNjYsOTguODMsMTcwLjgzYTQsNCwwLDAsMS01LjY2LTUuNjZsMzItMzJhNCw0LDAsMCwxLDUuNjYsMFptMC01NmE0LDQsMCwwLDEtNS42Niw1LjY2TDEyOCw4NS42Niw5OC44MywxMTQuODNhNCw0LDAsMCwxLTUuNjYtNS42NmwzMi0zMmE0LDQsMCwwLDEsNS42NiwwWiIvPjwvc3ZnPg==)
 */
export function PhCaretCircleDoubleUpThinIcon(props: PhCaretCircleDoubleUpThinIconProps) {
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
      <path d="M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm-5.66,135.76A92,92,0,1,1,220,128,91.37,91.37,0,0,1,193.05,193.05Zm-30.22-27.88a4,4,0,0,1-5.66,5.66L128,141.66,98.83,170.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Zm0-56a4,4,0,0,1-5.66,5.66L128,85.66,98.83,114.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Z"/>
    </svg>
  );
}
