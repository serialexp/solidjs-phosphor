import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHSixBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTcuMDYsMTQwLjMzbDEzLjI0LTIyLjE4YTEyLDEyLDAsMSwwLTIwLjYtMTIuM2wtMzIuMjUsNTRjLS4wOS4xNS0uMTcuMzEtLjI1LjQ3YTQwLDQwLDAsMSwwLDM5Ljg2LTIwWk0yMTIsMTk2YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDIxMiwxOTZaTTE1Niw1NlYxNzZhMTIsMTIsMCwwLDEtMjQsMFYxMjhINTJ2NDhhMTIsMTIsMCwwLDEtMjQsMFY1NmExMiwxMiwwLDAsMSwyNCwwdjQ4aDgwVjU2YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 */
export function PhTextHSixBoldIcon(props: PhTextHSixBoldIconProps) {
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
      <path d="M217.06,140.33l13.24-22.18a12,12,0,1,0-20.6-12.3l-32.25,54c-.09.15-.17.31-.25.47a40,40,0,1,0,39.86-20ZM212,196a16,16,0,1,1,16-16A16,16,0,0,1,212,196ZM156,56V176a12,12,0,0,1-24,0V128H52v48a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v48h80V56a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
