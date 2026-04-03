import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFileTxtIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCwxMjBhOCw4LDAsMCwwLDgtOFY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4djE2YTgsOCwwLDAsMCwxNiwwVjg4YTgsOCwwLDAsMC0yLjM0LTUuNjZsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2NzJBOCw4LDAsMCwwLDQ4LDEyMFpNMTYwLDUxLjMxLDE4OC42OSw4MEgxNjBabS01LjQ5LDEwNS4zNEwxMzcuODMsMTgwbDE2LjY4LDIzLjM1YTgsOCwwLDAsMS0xMyw5LjNMMTI4LDE5My43NmwtMTMuNDksMTguODlhOCw4LDAsMSwxLTEzLTkuM0wxMTguMTcsMTgwbC0xNi42OC0yMy4zNWE4LDgsMCwxLDEsMTMtOS4zTDEyOCwxNjYuMjRsMTMuNDktMTguODlhOCw4LDAsMCwxLDEzLDkuM1pNOTIsMTUyYTgsOCwwLDAsMS04LDhINzJ2NDhhOCw4LDAsMCwxLTE2LDBWMTYwSDQ0YTgsOCwwLDAsMSwwLTE2SDg0QTgsOCwwLDAsMSw5MiwxNTJabTEyOCwwYTgsOCwwLDAsMS04LDhIMjAwdjQ4YTgsOCwwLDAsMS0xNiwwVjE2MEgxNzJhOCw4LDAsMCwxLDAtMTZoNDBBOCw4LDAsMCwxLDIyMCwxNTJaIi8+PC9zdmc+)
 */
export function PhFileTxtIcon(props: PhFileTxtIconProps) {
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
      <path d="M48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Zm-5.49,105.34L137.83,180l16.68,23.35a8,8,0,0,1-13,9.3L128,193.76l-13.49,18.89a8,8,0,1,1-13-9.3L118.17,180l-16.68-23.35a8,8,0,1,1,13-9.3L128,166.24l13.49-18.89a8,8,0,0,1,13,9.3ZM92,152a8,8,0,0,1-8,8H72v48a8,8,0,0,1-16,0V160H44a8,8,0,0,1,0-16H84A8,8,0,0,1,92,152Zm128,0a8,8,0,0,1-8,8H200v48a8,8,0,0,1-16,0V160H172a8,8,0,0,1,0-16h40A8,8,0,0,1,220,152Z"/>
    </svg>
  );
}
