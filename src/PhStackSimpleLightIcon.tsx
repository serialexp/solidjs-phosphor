import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStackSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMywxMDkuMjFsMTEyLDY0YTYsNiwwLDAsMCw2LDBsMTEyLTY0YTYsNiwwLDAsMCwwLTEwLjQybC0xMTItNjRhNiw2LDAsMCwwLTYsMGwtMTEyLDY0YTYsNiwwLDAsMCwwLDEwLjQyWm0xMTUtNjIuM0wyMjcuOTEsMTA0LDEyOCwxNjEuMDksMjguMDksMTA0Wk0yNDUuMjEsMTQxYTYsNiwwLDAsMS0yLjIzLDguMTlsLTExMiw2NGE2LDYsMCwwLDEtNiwwbC0xMTItNjRhNiw2LDAsMCwxLDYtMTAuNDJsMTA5LDYyLjMsMTA5LTYyLjNBNiw2LDAsMCwxLDI0NS4yMSwxNDFaIi8+PC9zdmc+)
 */
export function PhStackSimpleLightIcon(props: PhStackSimpleLightIconProps) {
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
      <path d="M13,109.21l112,64a6,6,0,0,0,6,0l112-64a6,6,0,0,0,0-10.42l-112-64a6,6,0,0,0-6,0l-112,64a6,6,0,0,0,0,10.42Zm115-62.3L227.91,104,128,161.09,28.09,104ZM245.21,141a6,6,0,0,1-2.23,8.19l-112,64a6,6,0,0,1-6,0l-112-64a6,6,0,0,1,6-10.42l109,62.3,109-62.3A6,6,0,0,1,245.21,141Z"/>
    </svg>
  );
}
