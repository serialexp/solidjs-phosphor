import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaperPlaneRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI3Ljg5YTE2LDE2LDAsMCwxLTguMTgsMTRMNjMuOSwyMzcuOUExNi4xNSwxNi4xNSwwLDAsMSw1NiwyNDBhMTYsMTYsMCwwLDEtMTUtMjEuMzNsMjctNzkuOTVBNCw0LDAsMCwxLDcxLjcyLDEzNkgxNDRhOCw4LDAsMCwwLDgtOC41Myw4LjE5LDguMTksMCwwLDAtOC4yNi03LjQ3aC03MmE0LDQsMCwwLDEtMy43OS0yLjcybC0yNy03OS45NEExNiwxNiwwLDAsMSw2My44NCwxOC4wN2wxNjgsOTUuODlBMTYsMTYsMCwwLDEsMjQwLDEyNy44OVoiLz48L3N2Zz4=)
 */
export function PhPaperPlaneRightFillIcon(props: PhPaperPlaneRightFillIconProps) {
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
      <path d="M240,127.89a16,16,0,0,1-8.18,14L63.9,237.9A16.15,16.15,0,0,1,56,240a16,16,0,0,1-15-21.33l27-79.95A4,4,0,0,1,71.72,136H144a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47h-72a4,4,0,0,1-3.79-2.72l-27-79.94A16,16,0,0,1,63.84,18.07l168,95.89A16,16,0,0,1,240,127.89Z"/>
    </svg>
  );
}
