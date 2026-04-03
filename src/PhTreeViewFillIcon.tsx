import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTreeViewFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTM2di04SDg4djY0YTgsOCwwLDAsMCw4LDhoNjR2LThhMTYsMTYsMCwwLDEsMTYtMTZoMzJhMTYsMTYsMCwwLDEsMTYsMTZ2MzJhMTYsMTYsMCwwLDEtMTYsMTZIMTc2YTE2LDE2LDAsMCwxLTE2LTE2di04SDk2YTI0LDI0LDAsMCwxLTI0LTI0VjgwSDY0QTE2LDE2LDAsMCwxLDQ4LDY0VjMyQTE2LDE2LDAsMCwxLDY0LDE2SDk2YTE2LDE2LDAsMCwxLDE2LDE2VjY0QTE2LDE2LDAsMCwxLDk2LDgwSDg4djMyaDcydi04YTE2LDE2LDAsMCwxLDE2LTE2aDMyYTE2LDE2LDAsMCwxLDE2LDE2djMyYTE2LDE2LDAsMCwxLTE2LDE2SDE3NkExNiwxNiwwLDAsMSwxNjAsMTM2WiIvPjwvc3ZnPg==)
 */
export function PhTreeViewFillIcon(props: PhTreeViewFillIconProps) {
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
      <path d="M160,136v-8H88v64a8,8,0,0,0,8,8h64v-8a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16v-8H96a24,24,0,0,1-24-24V80H64A16,16,0,0,1,48,64V32A16,16,0,0,1,64,16H96a16,16,0,0,1,16,16V64A16,16,0,0,1,96,80H88v32h72v-8a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H176A16,16,0,0,1,160,136Z"/>
    </svg>
  );
}
