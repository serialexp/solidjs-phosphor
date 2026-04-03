import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCloudArrowUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzguMzQsMTY1LjY2LDE2MCwxNDcuMzFWMjA4YTgsOCwwLDAsMS0xNiwwVjE0Ny4zMWwtMTguMzQsMTguMzVhOCw4LDAsMCwxLTExLjMyLTExLjMybDMyLTMyYTgsOCwwLDAsMSwxMS4zMiwwbDMyLDMyYTgsOCwwLDAsMS0xMS4zMiwxMS4zMlpNMTYwLDQwQTg4LjA4LDg4LjA4LDAsMCwwLDgxLjI5LDg4LjY4LDY0LDY0LDAsMSwwLDcyLDIxNmg0MGE4LDgsMCwwLDAsMC0xNkg3MmE0OCw0OCwwLDAsMSwwLTk2YzEuMSwwLDIuMiwwLDMuMjkuMTJBODgsODgsMCwwLDAsNzIsMTI4YTgsOCwwLDAsMCwxNiwwLDcyLDcyLDAsMSwxLDEwMC44LDY2LDgsOCwwLDAsMCwzLjIsMTUuMzQsNy45LDcuOSwwLDAsMCwzLjItLjY4QTg4LDg4LDAsMCwwLDE2MCw0MFoiLz48L3N2Zz4=)
 */
export function PhCloudArrowUpIcon(props: PhCloudArrowUpIconProps) {
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
      <path d="M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"/>
    </svg>
  );
}
