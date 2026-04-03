import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsMergeLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTAsNDB2NjRhNiw2LDAsMCwxLTEuNzYsNC4yNEwxMzQsMTYyLjQ5djU1bDIxLjc2LTIxLjc1YTYsNiwwLDAsMSw4LjQ4LDguNDhsLTMyLDMyYTYsNiwwLDAsMS04LjQ4LDBsLTMyLTMyYTYsNiwwLDAsMSw4LjQ4LTguNDhMMTIyLDIxNy41MXYtNTVMNjcuNzYsMTA4LjI0QTYsNiwwLDAsMSw2NiwxMDRWNDBhNiw2LDAsMCwxLDEyLDB2NjEuNTFsNTAsNTAsNTAtNTBWNDBhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 */
export function PhArrowsMergeLightIcon(props: PhArrowsMergeLightIconProps) {
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
      <path d="M190,40v64a6,6,0,0,1-1.76,4.24L134,162.49v55l21.76-21.75a6,6,0,0,1,8.48,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,217.51v-55L67.76,108.24A6,6,0,0,1,66,104V40a6,6,0,0,1,12,0v61.51l50,50,50-50V40a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
