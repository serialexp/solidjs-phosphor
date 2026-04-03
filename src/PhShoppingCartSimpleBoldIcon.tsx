import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShoppingCartSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuNTUsNjQuNzRBMTIsMTIsMCwwLDAsMjMyLDYwSDYwLjIzTDUxLjU2LDI4Ljc5QTEyLDEyLDAsMCwwLDQwLDIwSDIwYTEyLDEyLDAsMCwwLDAsMjRIMzAuODhsMzQuMywxMjMuNDlhMjguMDksMjguMDksMCwwLDAsMjcsMjAuNTFIMTkxYTI4LjA5LDI4LjA5LDAsMCwwLDI3LTIwLjUxbDI1LjYzLTkyLjI4QTEyLDEyLDAsMCwwLDI0MS41NSw2NC43NFpNMTk0LjgsMTYxLjA3QTQsNCwwLDAsMSwxOTEsMTY0SDkyLjE2YTQsNCwwLDAsMS0zLjg1LTIuOTNMNjYuOSw4NEgyMTYuMjFaTTEwOCwyMjBhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsMTA4LDIyMFptMTA0LDBhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsMjEyLDIyMFoiLz48L3N2Zz4=)
 */
export function PhShoppingCartSimpleBoldIcon(props: PhShoppingCartSimpleBoldIconProps) {
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
      <path d="M241.55,64.74A12,12,0,0,0,232,60H60.23L51.56,28.79A12,12,0,0,0,40,20H20a12,12,0,0,0,0,24H30.88l34.3,123.49a28.09,28.09,0,0,0,27,20.51H191a28.09,28.09,0,0,0,27-20.51l25.63-92.28A12,12,0,0,0,241.55,64.74ZM194.8,161.07A4,4,0,0,1,191,164H92.16a4,4,0,0,1-3.85-2.93L66.9,84H216.21ZM108,220a20,20,0,1,1-20-20A20,20,0,0,1,108,220Zm104,0a20,20,0,1,1-20-20A20,20,0,0,1,212,220Z"/>
    </svg>
  );
}
