import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVideoCameraBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDkuNDUsNjkuMzFhMTIsMTIsMCwwLDAtMTIuNTEsMUwyMTIsODguNDNWNzJhMjAsMjAsMCwwLDAtMjAtMjBIMzJBMjAsMjAsMCwwLDAsMTIsNzJWMTg0YTIwLDIwLDAsMCwwLDIwLDIwSDE5MmEyMCwyMCwwLDAsMCwyMC0yMFYxNjcuNTdsMjQuOTQsMTguMTRBMTIsMTIsMCwwLDAsMjU2LDE3NlY4MEExMiwxMiwwLDAsMCwyNDkuNDUsNjkuMzFaTTE4OCwxODBIMzZWNzZIMTg4Wm00NC0yNy41Ny0yMC0xNC41NFYxMTguMTFsMjAtMTQuNTRaIi8+PC9zdmc+)
 */
export function PhVideoCameraBoldIcon(props: PhVideoCameraBoldIconProps) {
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
      <path d="M249.45,69.31a12,12,0,0,0-12.51,1L212,88.43V72a20,20,0,0,0-20-20H32A20,20,0,0,0,12,72V184a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V167.57l24.94,18.14A12,12,0,0,0,256,176V80A12,12,0,0,0,249.45,69.31ZM188,180H36V76H188Zm44-27.57-20-14.54V118.11l20-14.54Z"/>
    </svg>
  );
}
