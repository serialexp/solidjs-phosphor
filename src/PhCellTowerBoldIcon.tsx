import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellTowerBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzguNjcsODYuNTFhMTIsMTIsMCwwLDAtMjEuMzQsMGwtNzIsMTQwYTEyLDEyLDAsMSwwLDIxLjM0LDExbDExLTIxLjQ5SDE3OC4yOGwxMS4wNSwyMS40OWExMiwxMiwwLDEsMCwyMS4zNC0xMVpNMTI4LDExOC4yNCwxNDUuMzYsMTUySDExMC42NFpNOTAuMDcsMTkybDguMjItMTZoNTkuNDJsOC4yMiwxNlpNMTc0LjUxLDY4LjczYTEyLDEyLDAsMSwxLTIxLjQ1LDEwLjc1LDI4LDI4LDAsMCwwLTUwLjM3LjUyQTEyLDEyLDAsMSwxLDgxLDY5LjcsNTIuMjgsNTIuMjgsMCwwLDEsMTI4LDQwLDUxLjc0LDUxLjc0LDAsMCwxLDE3NC41MSw2OC43M1ptLTEyNC41OCw3NmE5Miw5MiwwLDEsMSwxNTYuMTQsMEExMiwxMiwwLDAsMSwxODUuNzEsMTMyYTY4LDY4LDAsMSwwLTExNS40MiwwQTEyLDEyLDAsMCwxLDQ5LjkzLDE0NC43WiIvPjwvc3ZnPg==)
 */
export function PhCellTowerBoldIcon(props: PhCellTowerBoldIconProps) {
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
      <path d="M138.67,86.51a12,12,0,0,0-21.34,0l-72,140a12,12,0,1,0,21.34,11l11-21.49H178.28l11.05,21.49a12,12,0,1,0,21.34-11ZM128,118.24,145.36,152H110.64ZM90.07,192l8.22-16h59.42l8.22,16ZM174.51,68.73a12,12,0,1,1-21.45,10.75,28,28,0,0,0-50.37.52A12,12,0,1,1,81,69.7,52.28,52.28,0,0,1,128,40,51.74,51.74,0,0,1,174.51,68.73Zm-124.58,76a92,92,0,1,1,156.14,0A12,12,0,0,1,185.71,132a68,68,0,1,0-115.42,0A12,12,0,0,1,49.93,144.7Z"/>
    </svg>
  );
}
