import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendDownRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTU3LjY2bC00OCw0OEE4LDgsMCwwLDEsMTY4LDIwMFYxNjBIMTI4QTEwNC4xMSwxMDQuMTEsMCwwLDEsMjQsNTZhOCw4LDAsMCwxLDE2LDAsODguMSw4OC4xLDAsMCwwLDg4LDg4aDQwVjEwNGE4LDgsMCwwLDEsMTMuNjYtNS42Nmw0OCw0OEE4LDgsMCwwLDEsMjI5LjY2LDE1Ny42NloiLz48L3N2Zz4=)
 */
export function PhArrowBendDownRightFillIcon(props: PhArrowBendDownRightFillIconProps) {
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
      <path d="M229.66,157.66l-48,48A8,8,0,0,1,168,200V160H128A104.11,104.11,0,0,1,24,56a8,8,0,0,1,16,0,88.1,88.1,0,0,0,88,88h40V104a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,157.66Z"/>
    </svg>
  );
}
