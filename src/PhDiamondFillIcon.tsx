import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDiamondFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI4YTE1Ljg1LDE1Ljg1LDAsMCwxLTQuNjcsMTEuMjhsLTk2LjA1LDk2LjA2YTE2LDE2LDAsMCwxLTIyLjU2LDBoMGwtOTYtOTYuMDZhMTYsMTYsMCwwLDEsMC0yMi41Nmw5Ni4wNS05Ni4wNmExNiwxNiwwLDAsMSwyMi41NiwwbDk2LjA1LDk2LjA2QTE1Ljg1LDE1Ljg1LDAsMCwxLDI0MCwxMjhaIi8+PC9zdmc+)
 */
export function PhDiamondFillIcon(props: PhDiamondFillIconProps) {
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
      <path d="M240,128a15.85,15.85,0,0,1-4.67,11.28l-96.05,96.06a16,16,0,0,1-22.56,0h0l-96-96.06a16,16,0,0,1,0-22.56l96.05-96.06a16,16,0,0,1,22.56,0l96.05,96.06A15.85,15.85,0,0,1,240,128Z"/>
    </svg>
  );
}
