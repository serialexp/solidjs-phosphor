import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCloudIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNDBBODguMDksODguMDksMCwwLDAsODEuMjksODguNjcsNjQsNjQsMCwxLDAsNzIsMjE2aDg4YTg4LDg4LDAsMCwwLDAtMTc2Wm0wLDE2MEg3MmE0OCw0OCwwLDAsMSwwLTk2YzEuMSwwLDIuMiwwLDMuMjkuMTFBODgsODgsMCwwLDAsNzIsMTI4YTgsOCwwLDAsMCwxNiwwLDcyLDcyLDAsMSwxLDcyLDcyWiIvPjwvc3ZnPg==)
 */
export function PhCloudIcon(props: PhCloudIconProps) {
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
      <path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"/>
    </svg>
  );
}
