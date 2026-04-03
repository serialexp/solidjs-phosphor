import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBridgeBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTU2SDIwNFYxMTEuNDlhNzYuMzksNzYuMzksMCwwLDAsMjMuNDksMTUsMTIsMTIsMCwwLDAsOS0yMi4yNUE1MS44MSw1MS44MSwwLDAsMSwyMDQsNTZhMTIsMTIsMCwwLDAtMjQsMEE1Miw1MiwwLDAsMSw3Niw1NmExMiwxMiwwLDAsMC0yNCwwLDUxLjgxLDUxLjgxLDAsMCwxLTMyLjUsNDguMjIsMTIsMTIsMCwxLDAsOSwyMi4yNSw3Ni4zOSw3Ni4zOSwwLDAsMCwyMy40OS0xNVYxNTZIMjRhMTIsMTIsMCwwLDAsMCwyNEg1MnYyMGExMiwxMiwwLDAsMCwyNCwwVjE4MEgxODB2MjBhMTIsMTIsMCwwLDAsMjQsMFYxODBoMjhhMTIsMTIsMCwwLDAsMC0yNFptLTkyLTI0Ljk1VjE1NkgxMTZWMTMxLjA1YTc2LjI2LDc2LjI2LDAsMCwwLDI0LDBaTTc2LDExMS4zOGE3Ni40NCw3Ni40NCwwLDAsMCwxNiwxMS41M1YxNTZINzZaTTE2NCwxNTZWMTIyLjkxYTc2LjQ0LDc2LjQ0LDAsMCwwLDE2LTExLjUzVjE1NloiLz48L3N2Zz4=)
 */
export function PhBridgeBoldIcon(props: PhBridgeBoldIconProps) {
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
      <path d="M232,156H204V111.49a76.39,76.39,0,0,0,23.49,15,12,12,0,0,0,9-22.25A51.81,51.81,0,0,1,204,56a12,12,0,0,0-24,0A52,52,0,0,1,76,56a12,12,0,0,0-24,0,51.81,51.81,0,0,1-32.5,48.22,12,12,0,1,0,9,22.25,76.39,76.39,0,0,0,23.49-15V156H24a12,12,0,0,0,0,24H52v20a12,12,0,0,0,24,0V180H180v20a12,12,0,0,0,24,0V180h28a12,12,0,0,0,0-24Zm-92-24.95V156H116V131.05a76.26,76.26,0,0,0,24,0ZM76,111.38a76.44,76.44,0,0,0,16,11.53V156H76ZM164,156V122.91a76.44,76.44,0,0,0,16-11.53V156Z"/>
    </svg>
  );
}
