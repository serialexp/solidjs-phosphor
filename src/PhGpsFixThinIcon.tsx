import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGpsFixThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI0SDIxMS45QTg0LjExLDg0LjExLDAsMCwwLDEzMiw0NC4xVjE2YTQsNCwwLDAsMC04LDBWNDQuMUE4NC4xMSw4NC4xMSwwLDAsMCw0NC4xLDEyNEgxNmE0LDQsMCwwLDAsMCw4SDQ0LjFBODQuMTEsODQuMTEsMCwwLDAsMTI0LDIxMS45VjI0MGE0LDQsMCwwLDAsOCwwVjIxMS45QTg0LjExLDg0LjExLDAsMCwwLDIxMS45LDEzMkgyNDBhNCw0LDAsMCwwLDAtOFpNMTI4LDIwNGE3Niw3NiwwLDEsMSw3Ni03NkE3Ni4wOCw3Ni4wOCwwLDAsMSwxMjgsMjA0Wm0wLTExMmEzNiwzNiwwLDEsMCwzNiwzNkEzNiwzNiwwLDAsMCwxMjgsOTJabTAsNjRhMjgsMjgsMCwxLDEsMjgtMjhBMjgsMjgsMCwwLDEsMTI4LDE1NloiLz48L3N2Zz4=)
 */
export function PhGpsFixThinIcon(props: PhGpsFixThinIconProps) {
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
      <path d="M240,124H211.9A84.11,84.11,0,0,0,132,44.1V16a4,4,0,0,0-8,0V44.1A84.11,84.11,0,0,0,44.1,124H16a4,4,0,0,0,0,8H44.1A84.11,84.11,0,0,0,124,211.9V240a4,4,0,0,0,8,0V211.9A84.11,84.11,0,0,0,211.9,132H240a4,4,0,0,0,0-8ZM128,204a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,204Zm0-112a36,36,0,1,0,36,36A36,36,0,0,0,128,92Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"/>
    </svg>
  );
}
