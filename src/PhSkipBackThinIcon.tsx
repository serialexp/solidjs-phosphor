import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSkipBackThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTcuODcsMzcuNTJhMTIsMTIsMCwwLDAtMTIuMTguMzJMNjAsMTE2LjQ0VjQwYTQsNCwwLDAsMC04LDBWMjE2YTQsNCwwLDAsMCw4LDBWMTM5LjU2bDEyNS42OSw3OC42YTEyLDEyLDAsMCwwLDEyLjE4LjMyQTExLjY5LDExLjY5LDAsMCwwLDIwNCwyMDguMTJWNDcuODhBMTEuNjksMTEuNjksMCwwLDAsMTk3Ljg3LDM3LjUyWk0xOTYsMjA4LjEyYTMuOCwzLjgsMCwwLDEtMiwzLjM3LDQsNCwwLDAsMS00LjA2LS4xMUw2MS44MiwxMzEuMjZhMy44MywzLjgzLDAsMCwxLDAtNi41MkwxODkuOTQsNDQuNjJhNCw0LDAsMCwxLDIuMTEtLjYyLDQsNCwwLDAsMSwxLjk1LjUxLDMuOCwzLjgsMCwwLDEsMiwzLjM3WiIvPjwvc3ZnPg==)
 */
export function PhSkipBackThinIcon(props: PhSkipBackThinIconProps) {
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
      <path d="M197.87,37.52a12,12,0,0,0-12.18.32L60,116.44V40a4,4,0,0,0-8,0V216a4,4,0,0,0,8,0V139.56l125.69,78.6a12,12,0,0,0,12.18.32A11.69,11.69,0,0,0,204,208.12V47.88A11.69,11.69,0,0,0,197.87,37.52ZM196,208.12a3.8,3.8,0,0,1-2,3.37,4,4,0,0,1-4.06-.11L61.82,131.26a3.83,3.83,0,0,1,0-6.52L189.94,44.62a4,4,0,0,1,2.11-.62,4,4,0,0,1,1.95.51,3.8,3.8,0,0,1,2,3.37Z"/>
    </svg>
  );
}
