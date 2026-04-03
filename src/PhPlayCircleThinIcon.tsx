import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlayCircleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptNDYuMTItOTUuMzktNjQtNDBBNCw0LDAsMCwwLDEwNCw4OHY4MGE0LDQsMCwwLDAsMi4wNiwzLjUsNC4wNiw0LjA2LDAsMCwwLDEuOTQuNSw0LDQsMCwwLDAsMi4xMi0uNjFsNjQtNDBhNCw0LDAsMCwwLDAtNi43OFpNMTEyLDE2MC43OFY5NS4yMkwxNjQuNDUsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhPlayCircleThinIcon(props: PhPlayCircleThinIconProps) {
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
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm46.12-95.39-64-40A4,4,0,0,0,104,88v80a4,4,0,0,0,2.06,3.5,4.06,4.06,0,0,0,1.94.5,4,4,0,0,0,2.12-.61l64-40a4,4,0,0,0,0-6.78ZM112,160.78V95.22L164.45,128Z"/>
    </svg>
  );
}
