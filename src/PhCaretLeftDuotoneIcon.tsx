import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNDhWMjA4TDgwLDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjMuMDYsNDAuNjFhOCw4LDAsMCwwLTguNzIsMS43M2wtODAsODBhOCw4LDAsMCwwLDAsMTEuMzJsODAsODBBOCw4LDAsMCwwLDE2OCwyMDhWNDhBOCw4LDAsMCwwLDE2My4wNiw0MC42MVpNMTUyLDE4OC42OSw5MS4zMSwxMjgsMTUyLDY3LjMxWiIvPjwvc3ZnPg==)
 */
export function PhCaretLeftDuotoneIcon(props: PhCaretLeftDuotoneIconProps) {
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
      <path d="M160,48V208L80,128Z" opacity="0.2"/><path d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"/>
    </svg>
  );
}
