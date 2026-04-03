import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhQueueFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTY0LDcySDE5MmE4LDgsMCwwLDEsMCwxNkg2NGE4LDgsMCwwLDEsMC0xNlptNDAsMTEySDY0YTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSwwLDE2Wm0wLTQ4SDY0YTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSwwLDE2Wm05Mi40NCwyMi42Ni00OCwzMkE4LDgsMCwwLDEsMTQ0LDE5MmE4LDgsMCwwLDEtOC04VjEyMGE4LDgsMCwwLDEsMTIuNDQtNi42Nmw0OCwzMmE4LDgsMCwwLDEsMCwxMy4zMloiLz48L3N2Zz4=)
 */
export function PhQueueFillIcon(props: PhQueueFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM64,72H192a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm40,112H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm92.44,22.66-48,32A8,8,0,0,1,144,192a8,8,0,0,1-8-8V120a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z"/>
    </svg>
  );
}
