import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSkipBackIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTkuODEsMzRhMTYsMTYsMCwwLDAtMTYuMjQuNDNMNjQsMTA5LjIzVjQwYTgsOCwwLDAsMC0xNiwwVjIxNmE4LDgsMCwwLDAsMTYsMFYxNDYuNzdsMTE5LjU3LDc0Ljc4QTE1Ljk1LDE1Ljk1LDAsMCwwLDIwOCwyMDguMTJWNDcuODhBMTUuODYsMTUuODYsMCwwLDAsMTk5LjgxLDM0Wk0xOTIsMjA4LDY0LjE2LDEyOCwxOTIsNDguMDdaIi8+PC9zdmc+)
 */
export function PhSkipBackIcon(props: PhSkipBackIconProps) {
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
      <path d="M199.81,34a16,16,0,0,0-16.24.43L64,109.23V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0V146.77l119.57,74.78A15.95,15.95,0,0,0,208,208.12V47.88A15.86,15.86,0,0,0,199.81,34ZM192,208,64.16,128,192,48.07Z"/>
    </svg>
  );
}
