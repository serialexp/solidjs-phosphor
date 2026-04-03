import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquaresFourIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsNDBINTZBMTYsMTYsMCwwLDAsNDAsNTZ2NDhhMTYsMTYsMCwwLDAsMTYsMTZoNDhhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMTA0LDQwWm0wLDY0SDU2VjU2aDQ4djQ4Wm05Ni02NEgxNTJhMTYsMTYsMCwwLDAtMTYsMTZ2NDhhMTYsMTYsMCwwLDAsMTYsMTZoNDhhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMjAwLDQwWm0wLDY0SDE1MlY1Nmg0OHY0OFptLTk2LDMySDU2YTE2LDE2LDAsMCwwLTE2LDE2djQ4YTE2LDE2LDAsMCwwLDE2LDE2aDQ4YTE2LDE2LDAsMCwwLDE2LTE2VjE1MkExNiwxNiwwLDAsMCwxMDQsMTM2Wm0wLDY0SDU2VjE1Mmg0OHY0OFptOTYtNjRIMTUyYTE2LDE2LDAsMCwwLTE2LDE2djQ4YTE2LDE2LDAsMCwwLDE2LDE2aDQ4YTE2LDE2LDAsMCwwLDE2LTE2VjE1MkExNiwxNiwwLDAsMCwyMDAsMTM2Wm0wLDY0SDE1MlYxNTJoNDh2NDhaIi8+PC9zdmc+)
 */
export function PhSquaresFourIcon(props: PhSquaresFourIconProps) {
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
      <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"/>
    </svg>
  );
}
