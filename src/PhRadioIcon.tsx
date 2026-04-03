import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRadioIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTY4YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLDAtMTZIOTZBOCw4LDAsMCwxLDEwNCwxNjhabS04LTQwSDY0YTgsOCwwLDAsMCwwLDE2SDk2YTgsOCwwLDAsMCwwLTE2Wm0wLTMySDY0YTgsOCwwLDAsMCwwLDE2SDk2YTgsOCwwLDAsMCwwLTE2Wk0yMzIsODBWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjcyYTgsOCwwLDAsMSw1LjctNy42NmwxNjAtNDhhOCw4LDAsMCwxLDQuNiwxNS4zM0w4Ni41MSw2NEgyMTZBMTYsMTYsMCwwLDEsMjMyLDgwWk0yMTYsMTkyVjgwSDQwVjE5MkgyMTZabS0xNi01NmE0MCw0MCwwLDEsMS00MC00MEE0MCw0MCwwLDAsMSwyMDAsMTM2Wm0tMTYsMGEyNCwyNCwwLDEsMC0yNCwyNEEyNCwyNCwwLDAsMCwxODQsMTM2WiIvPjwvc3ZnPg==)
 */
export function PhRadioIcon(props: PhRadioIconProps) {
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
      <path d="M104,168a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H96A8,8,0,0,1,104,168Zm-8-40H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Zm0-32H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM232,80V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72a8,8,0,0,1,5.7-7.66l160-48a8,8,0,0,1,4.6,15.33L86.51,64H216A16,16,0,0,1,232,80ZM216,192V80H40V192H216Zm-16-56a40,40,0,1,1-40-40A40,40,0,0,1,200,136Zm-16,0a24,24,0,1,0-24,24A24,24,0,0,0,184,136Z"/>
    </svg>
  );
}
