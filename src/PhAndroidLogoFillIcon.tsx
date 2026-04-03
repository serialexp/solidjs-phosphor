import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAndroidLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDcuMDYsODAuNjdjLS43NC0uNzQtMS40OS0xLjQ2LTIuMjQtMi4xN2wyNC44NC0yNC44NGE4LDgsMCwwLDAtMTEuMzItMTEuMzJsLTI2LDI2YTExMS40MywxMTEuNDMsMCwwLDAtMTI4LjU1LjE5TDM3LjY2LDQyLjM0QTgsOCwwLDAsMCwyNi4zNCw1My42Nkw1MS40LDc4LjcyQTExMy4zOCwxMTMuMzgsMCwwLDAsMTYsMTYxLjEzVjE4NGExNiwxNiwwLDAsMCwxNiwxNkgyMjRhMTYsMTYsMCwwLDAsMTYtMTZWMTYwQTExMS4yNSwxMTEuMjUsMCwwLDAsMjA3LjA2LDgwLjY3Wk05MiwxNjBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsOTIsMTYwWm03MiwwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE2NCwxNjBaIi8+PC9zdmc+)
 */
export function PhAndroidLogoFillIcon(props: PhAndroidLogoFillIconProps) {
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
      <path d="M207.06,80.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8,8,0,0,0-11.32-11.32l-26,26a111.43,111.43,0,0,0-128.55.19L37.66,42.34A8,8,0,0,0,26.34,53.66L51.4,78.72A113.38,113.38,0,0,0,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM92,160a12,12,0,1,1,12-12A12,12,0,0,1,92,160Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,160Z"/>
    </svg>
  );
}
