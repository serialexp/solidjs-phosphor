import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTagBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuMTUsMTMzLjE4LDE0Ni44MywzMy44NkExOS44NSwxOS44NSwwLDAsMCwxMzIuNjksMjhINDBBMTIsMTIsMCwwLDAsMjgsNDB2OTIuNjlhMTkuODUsMTkuODUsMCwwLDAsNS44NiwxNC4xNGw5OS4zMiw5OS4zMmEyMCwyMCwwLDAsMCwyOC4yOCwwbDg0LjY5LTg0LjY5QTIwLDIwLDAsMCwwLDI0Ni4xNSwxMzMuMThabS05OC44Myw5My4xN0w1MiwxMzFWNTJoNzlsOTUuMzIsOTUuMzJaTTEwNCw4OEExNiwxNiwwLDEsMSw4OCw3MiwxNiwxNiwwLDAsMSwxMDQsODhaIi8+PC9zdmc+)
 */
export function PhTagBoldIcon(props: PhTagBoldIconProps) {
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
      <path d="M246.15,133.18,146.83,33.86A19.85,19.85,0,0,0,132.69,28H40A12,12,0,0,0,28,40v92.69a19.85,19.85,0,0,0,5.86,14.14l99.32,99.32a20,20,0,0,0,28.28,0l84.69-84.69A20,20,0,0,0,246.15,133.18Zm-98.83,93.17L52,131V52h79l95.32,95.32ZM104,88A16,16,0,1,1,88,72,16,16,0,0,1,104,88Z"/>
    </svg>
  );
}
